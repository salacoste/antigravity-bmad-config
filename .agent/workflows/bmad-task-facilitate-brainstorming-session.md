---
description: Execute BMad Task: Facilitate Brainstorming Session
---
# Execute Facilitate Brainstorming Session

1. Read the task definition:
   `view_file .bmad-core/tasks/facilitate-brainstorming-session.md`
2. Execute the task strictly following the instructions in the file.
3. **CRITICAL**: When the task requires user interaction, elicitation, or waiting for feedback (e.g. "WAIT FOR USER RESPONSE"), you MUST use the `notify_user` tool. 
   - Present the options (e.g. 1-9) in the `Message` argument.
   - Set `BlockedOnUser` to `true`.
   - Do NOT proceed until you receive the user's response via the tool output in the next turn.
