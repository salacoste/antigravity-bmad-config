# Antigravity BMad Config Template

This repository serves as a **configuration basement** (template) for using the [BMad Method](https://github.com/bmadcode/bmad-method) within the Antigravity AI agent environment.

It comes pre-configured with agent definitions, tasks, and transposed workflows that allow Antigravity to fully leverage the BMad agile development process through native slash commands.

## Features

*   **Integrated BMad Core**: Contains the full `.bmad-core` definition (Agents, Tasks, Templates).
*   **Transposed Workflows**: Automatically generated workflows in `.agent/workflows` that bridge Antigravity and BMad.
*   **Short Aliases**: Native support for short slash commands (e.g., `/po`, `/dev`).
*   **Smart Handoffs**: Agents are context-aware and suggest the next logical workflow step upon task completion.

## Available Command Agents

Use these slash commands in Antigravity to activate specific BMad roles:

| Command | Role | Description |
| :--- | :--- | :--- |
| `/pm` | **Product Manager** | Requirements gathering, PRD creation, user stories. |
| `/architect` | **System Architect** | Technical design, architecture documentation. |
| `/po` | **Product Owner** | Backlog management, story validation, process alignment. |
| `/dev` | **Developer** | Implementation of stories, writing code. |
| `/qa` | **Test Architect** | Testing strategy, risk assessment, quality gates. |
| `/ux` | **UX Expert** | UI/UX design, frontend specifications. |
| `/analyst` | **Analyst** | Deep research, market analysis. |
| `/sm` | **Scrum Master** | Process checking, alignment verification. |
| `/master` | **BMad Master** | General-purpose helper for the framework. |
| `/orchestrator` | **Orchestrator** | High-level agent coordination. |

## Quick Start

1.  **Clone this repository** to start your new project:
    ```bash
    git clone https://github.com/salacoste/antigravity-bmad-config.git my-new-project
    cd my-new-project
    rm -rf .git # Remove the template's git history
    git init    # Initialize your own repo
    ```

2.  **Start Planning**:
    *   Run `/pm` to begin defining your project requirements.
    *   The agent will guide you through creating a `docs/prd.md`.

3.  **Follow the Flow**:
    *   Agents will read your config and artifacts automatically.
    *   Upon finishing a task, they will suggest the next command (e.g., `Now run /architect`).

## Maintenance

The repository includes a helper script `.gemini/transpose_bmad.py`. If you update the core BMad definitions in `.bmad-core`, run this script to regenerate the Antigravity workflows:

```bash
python3 .gemini/transpose_bmad.py
```
