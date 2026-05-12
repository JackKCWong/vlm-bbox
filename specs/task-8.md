# Task 8: Prompt Editor with Markdown Support

## Task Overview
Create a markdown editor component for the prompt input, along with action buttons (Run, Clear).

## Dependencies
- Task 1: @uiw/react-md-editor must be installed

## External Libraries Required
| Library | Purpose |
|---------|---------|
| @uiw/react-md-editor | Markdown editor component |
| (none additional) | Use native React and Tailwind CSS |

## Pseudo Code - Main Flow

### Component: PromptEditor
```typescript
interface PromptEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  onClear: () => void;
  isRunning?: boolean;
}

// 1. Container: vertical flex, takes majority of Result section
// 2. Editor area: @uiw/react-md-editor
   - Height: flexible, fills available space
   - Placeholder: "Enter your prompt..."
   - Markdown preview on right side
// 3. Button row (bottom):
   - Run button (primary style, right-aligned)
   - Clear button (secondary/ghost style)
   - Loading spinner when isRunning is true

// Run button states:
// - Enabled: "Run" text
// - Running: "Running..." + spinner
// - Disabled: when no prompt or isRunning
```

### Editor Configuration
```typescript
// @uiw/react-md-editor configuration:
{
  preview: "live",     // live preview of markdown
  height: "100%",      // fill container
  toolbar: [
    "bold", "italic", "link", "code",
    "ordered-list", "unordered-list"
  ]
}
```

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| Ctrl/Cmd + Enter | Run |
| Escape | Clear |

## File Structure
```
app/components/
  PromptEditor.tsx    # Main editor component
```

## Acceptance Criteria
- [ ] Markdown editor with live preview
- [ ] Basic formatting toolbar visible
- [ ] Run button triggers onRun callback
- [ ] Clear button triggers onClear callback
- [ ] Run button disabled when prompt is empty
- [ ] Loading state during processing
- [ ] Keyboard shortcut Ctrl+Enter to run
- [ ] Keyboard shortcut Escape to clear