import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero3D } from '../Hero3D';

// Mock @react-three/fiber
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: any) => <div data-testid="canvas">{children}</div>,
  useFrame: vi.fn(),
  useThree: () => ({ size: { width: 800, height: 600 } }),
}));

// Mock @react-three/drei
vi.mock('@react-three/drei', () => ({
  MeshTransmissionMaterial: ({ children }: any) => <mesh>{children}</mesh>,
  Float: ({ children }: any) => <group>{children}</group>,
  PerspectiveCamera: () => <camera />,
  Stars: () => <points />,
  PresentationControls: ({ children }: any) => <group>{children}</group>,
}));

// Mock SafePresentationControls
vi.mock('../SafePresentationControls', () => ({
  SafePresentationControls: ({ children }: any) => <group data-testid="safe-controls">{children}</group>,
}));

describe('Hero3D', () => {
  it('renders without crashing', () => {
    render(<Hero3D />);
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });

  it('renders the canvas container with correct styling', () => {
    const { container } = render(<Hero3D />);
    const canvasContainer = container.querySelector('div');
    expect(canvasContainer).toHaveClass('cursor-grab');
  });

  it('displays system status information', () => {
    render(<Hero3D />);
    expect(screen.getByText(/System: Online/i)).toBeInTheDocument();
    expect(screen.getByText(/Module: CV-LiDAR/i)).toBeInTheDocument();
  });

  it('displays STABLE state initially', () => {
    render(<Hero3D />);
    expect(screen.getByText(/STABLE/i)).toBeInTheDocument();
  });

  it('renders SafePresentationControls', () => {
    render(<Hero3D />);
    expect(screen.getByTestId('safe-controls')).toBeInTheDocument();
  });
});
