import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from '../src/store/useAppStore';

describe('useAppStore', () => {
  beforeEach(() => {
    useAppStore.getState().reset();
  });

  describe('initial state', () => {
    it('should have null pdfDoc', () => {
      expect(useAppStore.getState().pdfDoc).toBeNull();
    });

    it('should have null pdfBytes', () => {
      expect(useAppStore.getState().pdfBytes).toBeNull();
    });

    it('should have currentPage of 1', () => {
      expect(useAppStore.getState().currentPage).toBe(1);
    });

    it('should have totalPages of 0', () => {
      expect(useAppStore.getState().totalPages).toBe(0);
    });

    it('should have empty bboxes array', () => {
      expect(useAppStore.getState().bboxes).toEqual([]);
    });

    it('should have empty prompt', () => {
      expect(useAppStore.getState().prompt).toBe('');
    });

    it('should not be loading', () => {
      expect(useAppStore.getState().isLoading).toBe(false);
    });

    it('should have null error', () => {
      expect(useAppStore.getState().error).toBeNull();
    });

    it('should have null selectedBBox', () => {
      expect(useAppStore.getState().selectedBBox).toBeNull();
    });
  });

  describe('setPdfDoc', () => {
    it('should set pdfDoc', () => {
      const doc = { numPages: 5 };
      useAppStore.getState().setPdfDoc(doc);
      expect(useAppStore.getState().pdfDoc).toBe(doc);
    });
  });

  describe('setPdfBytes', () => {
    it('should set pdfBytes', () => {
      const bytes = new Uint8Array([1, 2, 3]);
      useAppStore.getState().setPdfBytes(bytes);
      expect(useAppStore.getState().pdfBytes).toBe(bytes);
    });
  });

  describe('setCurrentPage', () => {
    it('should set currentPage', () => {
      useAppStore.getState().setCurrentPage(3);
      expect(useAppStore.getState().currentPage).toBe(3);
    });
  });

  describe('setTotalPages', () => {
    it('should set totalPages', () => {
      useAppStore.getState().setTotalPages(10);
      expect(useAppStore.getState().totalPages).toBe(10);
    });
  });

  describe('bboxes management', () => {
    it('should add a bbox', () => {
      const bbox = { page: 1, x: 10, y: 20, width: 100, height: 50, label: 'test' };
      useAppStore.getState().addBBox(bbox);
      expect(useAppStore.getState().bboxes).toHaveLength(1);
      expect(useAppStore.getState().bboxes[0]).toEqual(bbox);
    });

    it('should update a bbox by index', () => {
      const bbox = { page: 1, x: 10, y: 20, width: 100, height: 50, label: 'test' };
      useAppStore.getState().addBBox(bbox);
      useAppStore.getState().updateBBox(0, { label: 'updated' });
      expect(useAppStore.getState().bboxes[0].label).toBe('updated');
      expect(useAppStore.getState().bboxes[0].x).toBe(10);
    });

    it('should remove a bbox by index', () => {
      const bbox1 = { page: 1, x: 10, y: 20, width: 100, height: 50, label: 'a' };
      const bbox2 = { page: 1, x: 30, y: 40, width: 100, height: 50, label: 'b' };
      useAppStore.getState().addBBox(bbox1);
      useAppStore.getState().addBBox(bbox2);
      useAppStore.getState().removeBBox(0);
      expect(useAppStore.getState().bboxes).toHaveLength(1);
      expect(useAppStore.getState().bboxes[0].label).toBe('b');
    });

    it('should clear all bboxes', () => {
      useAppStore.getState().addBBox({ page: 1, x: 10, y: 20, width: 100, height: 50, label: 'a' });
      useAppStore.getState().addBBox({ page: 1, x: 30, y: 40, width: 100, height: 50, label: 'b' });
      useAppStore.getState().clearBBoxes();
      expect(useAppStore.getState().bboxes).toHaveLength(0);
    });
  });

  describe('setPrompt', () => {
    it('should set prompt', () => {
      useAppStore.getState().setPrompt('Find all tables');
      expect(useAppStore.getState().prompt).toBe('Find all tables');
    });
  });

  describe('setIsLoading', () => {
    it('should set isLoading to true', () => {
      useAppStore.getState().setIsLoading(true);
      expect(useAppStore.getState().isLoading).toBe(true);
    });

    it('should set isLoading to false', () => {
      useAppStore.getState().setIsLoading(true);
      useAppStore.getState().setIsLoading(false);
      expect(useAppStore.getState().isLoading).toBe(false);
    });
  });

  describe('setError', () => {
    it('should set error message', () => {
      useAppStore.getState().setError('Failed to load PDF');
      expect(useAppStore.getState().error).toBe('Failed to load PDF');
    });

    it('should clear error when set to null', () => {
      useAppStore.getState().setError('Failed');
      useAppStore.getState().setError(null);
      expect(useAppStore.getState().error).toBeNull();
    });
  });

  describe('setSelectedBBox', () => {
    it('should set selectedBBox', () => {
      useAppStore.getState().setSelectedBBox(2);
      expect(useAppStore.getState().selectedBBox).toBe(2);
    });

    it('should clear selectedBBox when set to null', () => {
      useAppStore.getState().setSelectedBBox(2);
      useAppStore.getState().setSelectedBBox(null);
      expect(useAppStore.getState().selectedBBox).toBeNull();
    });
  });

  describe('reset', () => {
    it('should reset all state to initial values', () => {
      useAppStore.getState().setPdfDoc({ numPages: 5 });
      useAppStore.getState().setPdfBytes(new Uint8Array([1, 2]));
      useAppStore.getState().setCurrentPage(3);
      useAppStore.getState().setTotalPages(10);
      useAppStore.getState().addBBox({ page: 1, x: 10, y: 20, width: 100, height: 50, label: 'test' });
      useAppStore.getState().setPrompt('Find tables');
      useAppStore.getState().setIsLoading(true);
      useAppStore.getState().setError('Some error');
      useAppStore.getState().setSelectedBBox(1);

      useAppStore.getState().reset();

      const state = useAppStore.getState();
      expect(state.pdfDoc).toBeNull();
      expect(state.pdfBytes).toBeNull();
      expect(state.currentPage).toBe(1);
      expect(state.totalPages).toBe(0);
      expect(state.bboxes).toEqual([]);
      expect(state.prompt).toBe('');
      expect(state.isLoading).toBe(false);
      expect(state.error).toBeNull();
      expect(state.selectedBBox).toBeNull();
    });
  });
});