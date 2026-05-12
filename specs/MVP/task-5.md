# Task 5: Prompt Editor

## Task Overview
Create markdown editor component for prompt input with Run and Clear buttons.

## Dependencies
Task 1: Project Setup

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| @uiw/react-md-editor | ^4.0.0 | Markdown editor |

## Pseudo Code - Main Flow
```
1. Create PromptEditor component
   - Use @uiw/react-md-editor
   - Take initial value from props
   - Handle onChange callback
   - Apply custom styling if needed

2. Create ActionButtons component
   - "Run" button - primary action
   - "Clear" button - secondary action
   - Handle click callbacks
   - Show loading state on Run when processing
```

## File Structure
```
/src/components
  /prompt
    PromptEditor.tsx
    ActionButtons.tsx
```

## Acceptance Criteria
- [ ] Markdown editor renders correctly
- [ ] Text can be entered and edited
- [ ] Run button triggers callback
- [ ] Clear button triggers callback
- [ ] Loading state shows on Run button during processing