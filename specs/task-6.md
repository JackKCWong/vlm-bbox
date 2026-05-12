# Task 6: PDF Page Navigator

## Task Overview
Create a navigation component for PDF files that allows users to browse through pages with previous/next buttons and page number display.

## Dependencies
- Task 4: Image preview component
- Task 5: PDF to image conversion

## External Libraries Required
| Library | Purpose |
|---------|---------|
| (none additional) | Use native React and Tailwind CSS |

## Pseudo Code - Main Flow

### Component: PageNavigator
```typescript
interface PageNavigatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// 1. Container: horizontal flex layout
// 2. Prev button (disabled if on page 1):
   - Icon: left chevron (<)
   - onClick: decrement currentPage
// 3. Page indicator:
   - Display: "Page X of Y"
   - Input field or dropdown for direct navigation
// 4. Next button (disabled if on last page):
   - Icon: right chevron (>)
   - onClick: increment currentPage

// 5. Keyboard shortcuts:
   - Left arrow: previous page
   - Right arrow: next page
```

### Direct Page Navigation
- User can type page number directly
- Validate input (1 to totalPages)
- On enter/blur, navigate to typed page
- Invalid input: reset to current page

### State Management
```typescript
// In parent component:
const [currentPage, setCurrentPage] = useState(1);
const [convertedPages, setConvertedPages] = useState<ConvertedPage[]>([]);

// When PDF selected:
1. Check cache for converted pages
2. If cached, load from cache
3. If not, convert PDF and store in cache
4. Set currentPage to 1

// When page changes:
1. Update currentPage state
2. Pass page image data to ImagePreview
```

## File Structure
```
app/components/
  PageNavigator.tsx    # Navigation component
```

## Acceptance Criteria
- [ ] Displays "Page X of Y" indicator
- [ ] Previous button navigates to prev page
- [ ] Next button navigates to next page
- [ ] Previous button disabled on page 1
- [ ] Next button disabled on last page
- [ ] Direct page number input works
- [ ] Keyboard arrow keys work
- [ ] Total pages updates when PDF changes