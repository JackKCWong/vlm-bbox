import { create } from 'zustand';

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
    }),
}));