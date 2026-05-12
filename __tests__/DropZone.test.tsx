import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DropZone } from '../src/components/upload/DropZone';
import { useAppStore } from '../src/store/useAppStore';
import * as reactDropzone from 'react-dropzone';

vi.mock('react-dropzone');

const mockUseDropzone = vi.fn();
vi.spyOn(reactDropzone, 'useDropzone').mockImplementation(mockUseDropzone);

describe('DropZone', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useAppStore.getState().reset();
    mockUseDropzone.mockReturnValue({
      getRootProps: () => ({ onClick: vi.fn() }),
      getInputProps: () => ({ type: 'file', multiple: true }),
      isDragActive: false,
    });
  });

  it('should render dropzone with instructions', () => {
    render(<DropZone />);
    expect(screen.getByText(/drag & drop pdf or image files/i)).toBeTruthy();
    expect(screen.getByText(/accepts: pdf, jpg, png, gif, webp/i)).toBeTruthy();
  });

  it('should show drag active message when isDragActive is true', () => {
    mockUseDropzone.mockReturnValue({
      getRootProps: () => ({ onClick: vi.fn() }),
      getInputProps: () => ({ type: 'file' }),
      isDragActive: true,
    });
    render(<DropZone />);
    expect(screen.getByText(/drop the files here/i)).toBeTruthy();
  });
});