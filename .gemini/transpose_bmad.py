import os
import glob

BMAD_CORE = ".bmad-core"
WORKFLOW_DIR = ".agent/workflows"

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def parse_agent_dependencies(agent_path):
    """
    Parses the agent markdown file to find the YAML block and extract task dependencies.
    """
    dependencies = []
    try:
        with open(agent_path, 'r') as f:
            content = f.read()
            
        # simple parsing to find the yaml block
        if "dependencies:" in content and "tasks:" in content:
            # find the tasks list
            lines = content.splitlines()
            in_dep = False
            in_tasks = False
            for line in lines:
                stripped = line.strip()
                if stripped.startswith("dependencies:"):
                    in_dep = True
                    continue
                if in_dep and stripped.startswith("tasks:"):
                    in_tasks = True
                    continue
                if in_tasks:
                    if stripped.startswith("-"):
                        # Extract filename, e.g. "- create-doc.md" -> "create-doc.md"
                        dependencies.append(stripped.lstrip("- ").strip())
                    elif stripped.endswith(":") or (stripped and not stripped.startswith("-")):
                        # End of tasks section
                        in_tasks = False
    except Exception as e:
        print(f"Error parsing {agent_path}: {e}")
    return dependencies

def create_agent_workflow(agent_path):
    basename = os.path.basename(agent_path)
    name = os.path.splitext(basename)[0]
    title = name.replace('-', ' ').title()
    
    tasks = parse_agent_dependencies(agent_path)
    task_list_str = "\n   ".join([f"- {t}" for t in tasks]) if tasks else "No specific tasks defined."

    # Logic to map specific filenames to short aliases
    aliases = {
        "ux-expert": "ux",
        "bmad-master": "master",
        "bmad-orchestrator": "orchestrator"
    }

    workflow_name = aliases.get(name, name)
    workflow_filename = f"{workflow_name}.md"
    
    content = f"""---
description: Act as the {title} BMad Agent
---
# Act as {title}

## Phase 1: Activation & Context Resolution
1. **Load Identity**:
   `view_file {BMAD_CORE}/agents/{name}.md`
   Adopt the persona and instructions defined in that file.

2. **Resolve State**:
   `view_file {BMAD_CORE}/core-config.yaml`
   **CRITICAL**: You must parse this config to find the **canonical paths** for project artifacts.
   - If you are **PM**, look for `prdFile` (default `docs/prd.md`).
   - If you are **Architect**, look for `prdFile` (input) and `architectureFile` (output).
   - If you are **Dev**, look for `devStoryLocation`.
   - **Action**: READ these distinct files immediately if they exist.

## Phase 2: Action Loop
You have the following BMad tasks available to you (defined in `{BMAD_CORE}/tasks/`):
   {task_list_str}

**Instructions:**
1. **Status Report**: Greet the user and explicitly state which files you have loaded into context.
2. **Execute tasks** as requested, using `notify_user` for any interactive steps.
3. **Completion & Handoff**:
   - When a major task is finished, ENSURE the result is written to the correct file.
   - **Handoff Receipt**: You MUST output a final summary block:
     ```markdown
     # Handoff Checklist
     - Modified/Created: [List absolute file paths]
     - Next Recommended Action: [Command, e.g. /architect]
     ```
   - This ensures the user and the next agent know exactly where the latest state is.

If the user wants to perform a generic action not in the tasks, use your Agent Persona to answer.
"""
    output_path = os.path.join(WORKFLOW_DIR, workflow_filename)
    with open(output_path, "w") as f:
        f.write(content)
    print(f"Created {output_path}")

def clean_old_workflows():
    # Remove the old verbose bmad-agent-*.md files AND the non-aliased versions if they differ
    patterns = ["bmad-agent-*.md", "ux-expert.md", "bmad-master.md", "bmad-orchestrator.md"]
    for pattern in patterns:
        for f in glob.glob(os.path.join(WORKFLOW_DIR, pattern)):
            try:
                os.remove(f)
                print(f"Removed old workflow: {f}")
            except OSError as e:
                print(f"Error deleting {f}: {e}")


def create_task_workflow(task_path):
    basename = os.path.basename(task_path)
    name = os.path.splitext(basename)[0]
    title = name.replace('-', ' ').title()
    
    content = f"""---
description: Execute BMad Task: {title}
---
# Execute {title}

1. Read the task definition:
   `view_file {BMAD_CORE}/tasks/{name}.md`
2. Execute the task strictly following the instructions in the file.
3. **CRITICAL**: When the task requires user interaction, elicitation, or waiting for feedback (e.g. "WAIT FOR USER RESPONSE"), you MUST use the `notify_user` tool. 
   - Present the options (e.g. 1-9) in the `Message` argument.
   - Set `BlockedOnUser` to `true`.
   - Do NOT proceed until you receive the user's response via the tool output in the next turn.
"""
    output_path = os.path.join(WORKFLOW_DIR, f"bmad-task-{name}.md")
    with open(output_path, "w") as f:
        f.write(content)
    print(f"Created {output_path}")

def main():
    ensure_dir(WORKFLOW_DIR)
    
    clean_old_workflows()
    
    # Process Agents
    agent_files = glob.glob(os.path.join(BMAD_CORE, "agents", "*.md"))
    for agent_file in agent_files:
        create_agent_workflow(agent_file)
        
    # Process Tasks
    task_files = glob.glob(os.path.join(BMAD_CORE, "tasks", "*.md"))
    for task_file in task_files:
        create_task_workflow(task_file)

if __name__ == "__main__":
    main()
