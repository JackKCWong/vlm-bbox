# Task 8: Prompt Editor

## Task Overview
Create a markdown editor in the Result section for users to input prompts.

## Dependencies
- Task 2: UI Layout

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| react-markdown | ^9.x | Markdown rendering and editing |
| remark-gfm | ^4.x | GitHub-flavored markdown support |

## Pseudo Code - Main Flow

```
1. Create PromptEditor component
2. Use textarea as base for editing
3. Add markdown preview toggle:
   - Edit mode: raw markdown text
   - Preview mode: rendered markdown
4. Style the editor to match app theme
5. Provide placeholder text:
   - "Enter your prompt here..."
6. Support common markdown:
   - Headers, bold, italic
   - Lists, code blocks
7. Make it resizable vertically
```

## File Structure
```
/components
  /PromptEditor.tsx   - Markdown prompt editor
```

## Acceptance Criteria
- [ ] Editor accepts and displays markdown text
- [ ] Preview mode renders markdown formatted
- [ ] Placeholder text displayed when empty
- [ ] Editor is resizable vertically
- [ ] Styled consistently with app theme