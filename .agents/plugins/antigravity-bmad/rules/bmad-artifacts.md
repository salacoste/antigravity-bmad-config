---
trigger: glob
globs: _bmad-output/**
description: BMad planning artifacts are skill-managed deliverables — change them through the owning skill, keep story status current
---

# BMad artifact handling

- Files under `_bmad-output/planning-artifacts/` (brief, PRD, UX spec,
  architecture) are written by their owning BMad skill. If a change is
  requested, route it through that skill instead of editing the doc
  directly; for mid-implementation course changes use
  `bmad-correct-course`.
- While implementing a story, keep its story file's status/notes
  current as tasks complete — downstream skills (review, retrospective,
  sprint planning) read that state.
- Never delete or rename planning artifacts to "clean up" — updated
  versions are written by skills with the user's confirmation.
