---
name: bmad-orchestrate
description: Orchestrates the full BMad Method delivery loop in Antigravity — detects which planning artifacts already exist, routes the user to the right BMad persona skill (analyst, PM, UX, architect, dev), and sequences Clarify → Plan → Build → Learn with explicit handoffs. Use when the user wants to start or continue a BMad workflow, asks "what's next", or wants to move from idea to PRD to implementation.
---

# BMad Orchestrator (Antigravity)

## Purpose

Single entry point that routes work across the BMad skills installed by
this template. You do **not** replace the personas — you dispatch to them,
track the state of their artifacts, and keep the loop moving.

## Ground Rules

1. **Dispatch, don't impersonate.** Persona work belongs to `bmad-agent-*`
   skills; phase work belongs to the matching `bmad-*` skill. Invoke them;
   never improvise a persona's content yourself.
2. **Artifacts are the state.** Everything lives under `_bmad-output/`
   (planning artifacts, specs, stories). Detect state by reading files,
   not by memory of the conversation.
3. **Decisions go through `ask_question`.** Whenever the path forward has
   2+ viable options, use the `ask_question` tool with concrete options
   (multi-select where appropriate) instead of free-text guessing.
4. **`_bmad/` is runtime, not content.** Never edit anything under `_bmad/`
   except `_bmad/custom/` (team layer). Regeneration happens via the
   template's `./setup.sh`.
5. **Lost? Ask `bmad-help`.** When the user's request doesn't map to a
   known phase, defer to the upstream orientation skill.

## Phase Map

| Phase | Persona / Skill | Produces | Exit gate |
|---|---|---|---|
| Clarify | `bmad-agent-analyst`, `bmad-brainstorming`, `bmad-product-brief`, `bmad-prfaq` | product brief, PR/FAQ | user confirms the problem is worth solving |
| Plan — requirements | `bmad-agent-pm`, `bmad-prd` | `planning-artifacts/*PRD*` | PRD validated against the brief |
| Plan — UX | `bmad-agent-ux-designer`, `bmad-ux` | UX spec | UX decisions reflected in the PRD |
| Plan — architecture | `bmad-agent-architect`, `bmad-architecture`, `bmad-spec` | architecture doc, spec + `stories.yaml` | architect marks spec implementation-ready |
| Plan → Build gate | `bmad-create-epics-and-stories`, `bmad-sprint-planning` | epics/stories listing, sprint status | readiness gate passes |
| Build | `bmad-agent-dev`, `bmad-build` (interactive) / `bmad-build-auto` (autonomous) | implementation + story updates | stories complete, tests green |
| Learn | `bmad-code-review`, `bmad-correct-course`, `bmad-retrospective`, `bmad-walkthrough` | review findings, course corrections | review findings triaged |

Exact artifact locations come from BMAD config — run the config resolver
(`uv run {project-root}/_bmad/scripts/resolve_config.py --project-root {project-root}`)
or read `_bmad/bmm/config.yaml` if the script is unavailable; defaults are
`_bmad-output/planning-artifacts/` and `_bmad-output/implementation-artifacts/`.

## Step 1 — Detect state (always first)

Read the artifact folders and classify:

- **Empty** → Day One path (below).
- **Brief exists, no PRD** → offer `bmad-prd` with John (`bmad-agent-pm`).
- **PRD exists, no architecture** → offer Winston (`bmad-agent-architect`) → `bmad-architecture`.
- **Architecture exists, no spec/stories** → offer `bmad-spec` → `bmad-create-epics-and-stories`.
- **Stories exist, not started** → offer `bmad-sprint-planning` (readiness gate).
- **Build in progress** → offer Amelia (`bmad-agent-dev`) → `bmad-build` / `bmad-build-auto`.
- **Milestone done** → offer `bmad-code-review` → `bmad-retrospective`.

Report findings in one short block, then use `ask_question` to offer the
next 2–4 sensible moves (the table above defines them).

## Step 2 — Day One path (empty project)

1. `ask_question`: "What brings you here?" — options: *I have a rough idea*,
   *I have requirements, need a plan*, *I have a plan, need to build*,
   *Just exploring BMad*.
2. Rough idea → suggest `bmad-forge-idea` or `bmad-brainstorming`, then brief.
3. Requirements in hand → skip to John / `bmad-prd` directly.
4. Plan in hand → architect or sprint-planning gate depending on artifacts.
5. Exploring → hand off to `bmad-help` and stop.

## Step 3 — Handoff receipt (after each phase)

Whenever a phase completes, output:

```markdown
# Handoff
- Completed: <phase> — <artifact paths written>
- Next: <skill / persona> — <one-line reason>
- Open questions: <none | list>
```

Then offer to invoke the next skill immediately via `ask_question`
(yes / not now / something else).

## Parallelism (Antigravity ≥ 2.0)

Independent work can run as parallel subagents (e.g. UX exploration while
architecture is being drafted). Keep artifact **writes** serialized per
file — two personas must never write the same artifact.

## Guardrails

- Never generate a PRD/architecture/story **content** yourself when a
  persona skill exists for it — that's impersonation, see Rule 1.
- If a required artifact is missing but a *later* phase is requested,
  name the gap and offer to route back (that's `bmad-correct-course`
  territory if work already started).
- If `bmad-build` halts on missing `uv`, tell the user to install
  uv + Python 3.11 (prerequisite of this template).
