import { create } from 'zustand';

export interface UploadedFile {
  id: string;
  name: string;
  file: File;
  type: 'pdf' | 'image';
}

interface BBox {
  page: number;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
}

interface AppState {
  pdfDoc: unknown | null;
  pdfBytes: Uint8Array | null;
  currentPage: number;
  totalPages: number;
  bboxes: BBox[];
  prompt: string;
  isLoading: boolean;
  error: string | null;
  selectedBBox: number | null;
  uploadedFiles: UploadedFile[];
  selectedFileId: string | null;
  pdfImages: { blob: Blob; width: number; height: number }[];
  setPdfDoc: (doc: unknown | null) => void;
  setPdfBytes: (bytes: Uint8Array | null) => void;
  setCurrentPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  addBBox: (bbox: BBox) => void;
  updateBBox: (index: number, bbox: Partial<BBox>) => void;
  removeBBox: (index: number) => void;
  clearBBoxes: () => void;
  setPrompt: (prompt: string) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSelectedBBox: (index: number | null) => void;
  addUploadedFile: (file: UploadedFile) => void;
  removeUploadedFile: (id: string) => void;
  setSelectedFileId: (id: string | null) => void;
  setPdfImages: (images: { blob: Blob; width: number; height: number }[]) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  pdfDoc: null,
  pdfBytes: null,
  currentPage: 1,
  totalPages: 0,
  bboxes: [],
  prompt: '',
  isLoading: false,
  error: null,
  selectedBBox: null,
  uploadedFiles: [],
  selectedFileId: null,
  pdfImages: [],
  setPdfDoc: (doc) => set({ pdfDoc: doc }),
  setPdfBytes: (bytes) => set({ pdfBytes: bytes }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: total }),
  addBBox: (bbox) => set((state) => ({ bboxes: [...state.bboxes, bbox] })),
  updateBBox: (index, bbox) =>
    set((state) => ({
      bboxes: state.bboxes.map((b, i) => (i === index ? { ...b, ...bbox } : b)),
    })),
  removeBBox: (index) =>
    set((state) => ({ bboxes: state.bboxes.filter((_, i) => i !== index) })),
  clearBBoxes: () => set({ bboxes: [] }),
  setPrompt: (prompt) => set({ prompt }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setSelectedBBox: (selectedBBox) => set({ selectedBBox }),
  addUploadedFile: (file) =>
    set((state) => ({ uploadedFiles: [...state.uploadedFiles, file] })),
  removeUploadedFile: (id) =>
    set((state) => ({
      uploadedFiles: state.uploadedFiles.filter((f) => f.id !== id),
      selectedFileId: state.selectedFileId === id ? null : state.selectedFileId,
    })),
  setSelectedFileId: (id) => set({ selectedFileId: id }),
  setPdfImages: (images) => set({ pdfImages: images }),
  reset: () =>
    set({
      pdfDoc: null,
      pdfBytes: null,
      currentPage: 1,
      totalPages: 0,
      bboxes: [],
      prompt: '',
      isLoading: false,
      error: null,
      selectedBBox: null,
      uploadedFiles: [],
      selectedFileId: null,
    }),
}));