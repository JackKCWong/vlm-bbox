# Task 10: Main Page Composition and Bounding Box Rendering

## Task Overview
Compose the main page by integrating all components, implementing the complete user flow, and adding the bounding box overlay functionality.

## Dependencies
- All previous tasks (1-9) must be completed

## External Libraries Required
| Library | Purpose |
|---------|---------|
| (none additional) | All required libraries from previous tasks |

## Pseudo Code - Main Flow

### Main Page: app/page.tsx

```typescript
// State management
interface FileState {
  id: string;
  name: string;
  type: 'pdf' | 'image';
  file: File;
  convertedPages?: ConvertedPage[];  // for PDFs
  cachedImage?: string;               // for images
}

export default function Home() {
  // File management state
  const [files, setFiles] = useState<FileState[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  
  // Preview state
  const [currentPage, setCurrentPage] = useState(1);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Bounding boxes state
  const [boundingBoxes, setBoundingBoxes] = useState<BoundingBox[]>([]);
  
  // Loading/running state
  const [isRunning, setIsRunning] = useState(false);
  
  // Prompt state
  const [prompt, setPrompt] = useState('');
  
  // Computed: selected file object
  const selectedFile = files.find(f => f.id === selectedFileId);
  
  // Computed: metadata for status bar
  const metadata = computeMetadata(selectedFile, currentPage);
}
```

### User Flow Implementation

#### 1. File Upload Flow
```typescript
const handleFilesSelected = async (newFiles: File[]) => {
  // 1. Add new files to state with unique IDs
  const fileStates = newFiles.map(f => ({
    id: generateId(),
    name: f.name,
    type: f.type === 'application/pdf' ? 'pdf' : 'image',
    file: f
  }));
  setFiles(prev => [...prev, ...fileStates]);
  
  // 2. Auto-select first file if none selected
  if (!selectedFileId && fileStates.length > 0) {
    setSelectedFileId(fileStates[0].id);
  }
};
```

#### 2. File Selection Flow
```typescript
const handleFileSelect = async (fileId: string) => {
  setSelectedFileId(fileId);
  setBoundingBoxes([]);  // clear previous boxes
  
  const file = files.find(f => f.id === fileId);
  if (!file) return;
  
  if (file.type === 'image') {
    // Load image directly
    const imageData = await fileToBase64(file.file);
    file.cachedImage = imageData;
    setPreviewImage(imageData);
  } else {
    // PDF: check cache or convert
    const cacheKey = getCacheKey(file);
    const cached = loadFromCache(cacheKey);
    
    if (cached) {
      file.convertedPages = cached;
    } else {
      const pages = await convertPDF(file.file);
      file.convertedPages = pages;
      saveToCache(cacheKey, pages);
    }
    setCurrentPage(1);
    setPreviewImage(file.convertedPages[0].imageData);
  }
};
```

#### 3. Run Flow (Analyze Image)
```typescript
const handleRun = async () => {
  if (!previewImage || !prompt.trim()) return;
  
  setIsRunning(true);
  try {
    const result = await analyzeImage(previewImage, prompt, selectedFile?.name);
    if (result.success) {
      setBoundingBoxes(result.boundingBoxes);
    } else {
      alert(result.error || 'Analysis failed');
    }
  } catch (error) {
    alert('Network error. Please try again.');
  } finally {
    setIsRunning(false);
  }
};
```

#### 4. Clear Flow
```typescript
const handleClear = () => {
  setBoundingBoxes([]);
};
```

#### 5. File Remove Flow
```typescript
const handleFileRemove = (fileId: string) => {
  setFiles(prev => prev.filter(f => f.id !== fileId));
  if (selectedFileId === fileId) {
    const remaining = files.filter(f => f.id !== fileId);
    setSelectedFileId(remaining[0]?.id || null);
    if (remaining[0]) {
      handleFileSelect(remaining[0].id);
    } else {
      setPreviewImage(null);
    }
  }
};
```

### Layout Structure
```typescript
// Main layout: 50/50 split
<div className="flex flex-1">
  {/* Left: Preview Section (50%) */}
  <div className="flex w-1/2 border-r">
    {/* File list sidebar (20%) */}
    <FileListSidebar
      files={files}
      selectedFileId={selectedFileId}
      onFileSelect={handleFileSelect}
      onFileRemove={handleFileRemove}
    />
    
    {/* Preview area (80%) */}
    <div className="flex flex-col flex-1">
      {/* File uploader (shown when no files) */}
      {!files.length && (
        <FileUploader onFilesSelected={handleFilesSelected} />
      )}
      
      {/* Image preview with bboxes */}
      {previewImage && (
        <ImagePreview
          src={previewImage}
          boundingBoxes={boundingBoxes}
        />
      )}
      
      {/* Page navigator (PDF only) */}
      {selectedFile?.type === 'pdf' && (
        <PageNavigator
          currentPage={currentPage}
          totalPages={selectedFile.convertedPages?.length || 0}
          onPageChange={setCurrentPage}
        />
      )}
      
      {/* Metadata bar */}
      <ImageMetadataBar metadata={metadata} />
    </div>
  </div>
  
  {/* Right: Result Section (50%) */}
  <div className="flex flex-col w-1/2 p-4">
    <PromptEditor
      value={prompt}
      onChange={setPrompt}
      onRun={handleRun}
      onClear={handleClear}
      isRunning={isRunning}
    />
  </div>
</div>
```

### Bounding Box Rendering (from Task 4)
- ImagePreview component handles overlay rendering
- Coordinates are 0-100 percentages (normalized from API response)
- Click on box can be handled for additional interactions

## File Structure
```
app/
  page.tsx           # Main page with full composition
  components/
    FileUploader.tsx
    FileListSidebar.tsx
    ImagePreview.tsx
    BoundingBoxOverlay.tsx
    PageNavigator.tsx
    ImageMetadataBar.tsx
    PromptEditor.tsx
  lib/
    pdfConverter.ts
    cacheManager.ts
    api.ts
    vlm.ts
    utils.ts         # shared utilities like fileToBase64
```

## Acceptance Criteria
- [ ] Left/right 50% split layout works
- [ ] File upload via drag-drop and click
- [ ] File list displays and selection works
- [ ] PDF pages navigable with prev/next
- [ ] Image preview displays correctly
- [ ] Metadata shows for current image
- [ ] Prompt editor with markdown support
- [ ] Run triggers API call and shows results
- [ ] Bounding boxes render on image
- [ ] Clear removes bounding boxes
- [ ] File removal works
- [ ] Page navigation updates preview
- [ ] Loading states displayed correctly
- [ ] Error handling for API failures