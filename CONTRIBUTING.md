# Contributing

Thanks for helping improve this template.

## What this repo is

This repository is a configuration/template layer that connects Antigravity workflows (`.agent/workflows`) with the BMad Method core (`.bmad-core`).

## Typical contributions

- Improve `README.md` clarity and examples
- Add or refine Antigravity workflows under `.agent/workflows/`
- Keep `AGENTS.md` up to date (when regenerating via BMAD-METHOD)
- Fix inconsistencies between docs and actual file layout

## Regenerating workflows

If you change anything under `.bmad-core/agents` or `.bmad-core/tasks`, regenerate Antigravity workflows:

```bash
python3 .gemini/transpose_bmad.py
```

## Pull request expectations

- Keep changes focused and easy to review
- Avoid breaking slash command names (`/pm`, `/dev`, etc.)
- Prefer documentation updates when behavior changes

