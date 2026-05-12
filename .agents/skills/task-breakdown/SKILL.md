---
name: task-breakdown
description: Break down feature specifications into implementable tasks
---

# Task Breakdown Skill

Break down a feature specification into small, implementable tasks with detailed implementation plans.

## When to Use

Use this skill when:
- Given a feature specification (e.g., `specs/MVP.md`)
- Need to create a structured implementation plan
- Want to decompose work into manageable tasks

## How to Use

1. Read the specification file
2. Identify all distinct components and features
3. Create a task list for sequential implementation, save the tasks and descriptions in a `task-list.md` file
4. Write a `task-N.md` file for each task with:
   - Task overview
   - Dependencies (preceding tasks)
   - External libraries required
   - Pseudo code for main flow
   - File structure
   - Acceptance criteria

## Output Format

Each task spec file should be saved as `{user specified dir}/task-{N}.md` where N is the task number.

### Task Spec Template

```markdown
# Task N: [Task Name]

## Task Overview
[One paragraph description of what this task does]

## Dependencies
[List of preceding tasks that must be completed first]

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| [name] | [version] | [description] |

## Pseudo Code - Main Flow
[Step-by-step pseudo code showing the main logic flow]

## File Structure
```
[list of files to be created/modified]
```

## Acceptance Criteria
- [ ] [Specific, testable criteria]
- [ ] [Another criteria]
```

## Task Sequencing Guidelines

1. **Foundation tasks first** - Set up dependencies, configs, utilities, and core data structures
2. **Backend and data tasks** - Implement APIs, data processing, business logic, and database schemas
3. **UI components next** - Build standalone UI components
4. **Feature integration** - Combine UI and backend components into cohesive features
5. **Page composition last** - Assemble final page and overall application

## Example Task Breakdown

For a spec requiring: file upload, image preview, API call, and rendering:

| Order | Task | Description |
|-------|------|-------------|
| 1 | Dependencies | Install required packages |
| 2 | File upload | Drag-drop component |
| 3 | File list | Sidebar with file selection |
| 4 | Image preview | Display images with bbox overlay |
| 5 | API integration | Backend communication |
| 6 | Main page | Compose all components |

## Rules

- Write pseudo code, NOT actual code
- Include specific acceptance criteria
- List all required external libraries
- Show file structure for each task
- Mark dependencies explicitly
- Keep tasks focused (ideally <300 LOC equivalent)
- Never exceed 3 levels of nesting in pseudo code