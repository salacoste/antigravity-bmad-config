# AGENTS.md — antigravity-bmad-config

Template that wires a **pinned** BMAD Method install into **Google
Antigravity** natively (skills + plugin), plus language/team presets.
v2 (Oct 2026). The v1 approach (`.agent/workflows` + `.bmad-core`
transpose) is retired — Antigravity sunset workflows on 2026-10-19 and
BMAD ≥ 6 installs Antigravity targets natively.

## Layout

```
setup.sh                     # pinned BMAD install + preset apply (safe to re-run)
.bmad-version                # single source of truth for the pin (6.12.4)
Makefile                     # setup / update / verify-pin / smoke-test
scripts/smoke-test.sh        # fresh-clone simulation + layout assertions
presets/<name>/_bmad/custom/ # preset sources → applied to _bmad/custom/
.agents/plugins/antigravity-bmad/
  skills/bmad-orchestrate/   # this template's orchestrator skill
  rules/                     # routing + artifact-protection rules
_bmad/        (ignored)      # BMAD runtime, installed by setup.sh
_bmad-output/ (ignored)      # user's planning/implementation artifacts
.agent/skills/, .agents/skills/ (ignored)  # BMAD skills per Antigravity target
```

## Working in this repo

- `_bmad/`, `.agent/`, `.agents/skills/`, `_bmad-output/` are generated —
  never edit or commit them. `./setup.sh` regenerates on demand.
- Changes to presets go in `presets/**` (source of truth), not in
  `_bmad/custom/` (output).
- Plugin content (orchestrator skill, rules) is hand-written and
  committed — follow the Antigravity plugin format
  (https://antigravity.google/docs/plugins/).
- After touching setup.sh or presets: `make smoke-test` must pass.

## Version pin

`.bmad-version` is the only place the version is written; `setup.sh`,
`Makefile`, and CI read it. To move to a newer BMAD: check the upstream
changelog (https://github.com/bmad-code-org/BMAD-METHOD), bump the pin,
run `make smoke-test`, fix breakage, update README references.
v7 note: v7 is alpha and not npm-pinnable; avoid v6 shim skill names
(`bmad-create-story`, `bmad-dev-story`, …) anywhere in this repo.

## Reference

- BMAD docs: https://docs.bmad-method.org / https://bmadcode.com
- Antigravity skills: https://antigravity.google/docs/skills/
- Workflows→skills migration: https://antigravity.google/docs/migration/workflows-to-skills/
