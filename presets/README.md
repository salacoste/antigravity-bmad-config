# Presets

Language/team presets applied by `./setup.sh <preset>` to `_bmad/custom/` —
the BMAD v6 **team layer** that the installer never touches (safe across
updates; see `_bmad/config.toml` header comments in any BMAD install).

Each preset may contain:

| File | Effect |
|---|---|
| `_bmad/custom/config.toml` | Global overrides: `[core]` keys such as `communication_language`, `document_output_language`, plus agent descriptors |
| `_bmad/custom/<skill-name>.toml` | Per-skill persona overrides. Scalars replace, arrays append (merge rules are documented in each skill's `customize.toml`) |

## Available presets

- **english** (default) — English conversation and artifacts; a documented
  near-no-op that shows the mechanism.
- **russian** — conversation in Russian, artifacts in English, plus a
  persona override for John (PM) as an exemplar.

## Adding your own

Copy `presets/english/` to `presets/<name>/`, edit, commit, and run
`./setup.sh <name>`. Presets are idempotent: re-running setup re-applies
them unless you have local modifications in `_bmad/custom/` (you'll be
asked before anything is overwritten).

Useful keys (from the BMAD v6.12 config schema):

```toml
[core]
user_name = "Ada"                       # how personas address you
communication_language = "Russian"      # language personas speak
document_output_language = "English"    # language of generated artifacts
output_folder = "_bmad-output"          # artifact root

[modules.bmm]
user_skill_level = "intermediate"       # beginner | intermediate | expert
planning_artifacts = "{project-root}/_bmad-output/planning-artifacts"
implementation_artifacts = "{project-root}/_bmad-output/implementation-artifacts"
project_knowledge = "{project-root}/docs"
```

Persona overrides — see any installed skill's `customize.toml`
(`.agent/skills/bmad-agent-*/customize.toml`) for the full schema
(`role`, `identity`, `communication_style`, `principles`,
`persistent_facts`, menu items, activation steps).
