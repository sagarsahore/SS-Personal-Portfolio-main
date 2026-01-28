import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BentoGrid } from '../BentoGrid';

// Mock Hero3D component
vi.mock('../Hero3D', () => ({
  Hero3D: () => <div data-testid="hero3d">Hero3D Component</div>,
}));

// Mock GlassCard
vi.mock('../GlassCard', () => ({
  GlassCard: ({ children, className }: any) => <div data-testid="glass-card" className={className}>{children}</div>,
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    line: ({ ...props }: any) => <line {...props} />,
    circle: ({ ...props }: any) => <circle {...props} />,
  },
}));

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Brain: () => <span data-testid="brain-icon" />,
  Eye: () => <span data-testid="eye-icon" />,
  Layers: () => <span data-testid="layers-icon" />,
  Microscope: () => <span data-testid="microscope-icon" />,
  Target: () => <span data-testid="target-icon" />,
  Cpu: () => <span data-testid="cpu-icon" />,
  Activity: () => <span data-testid="activity-icon" />,
  BookOpen: () => <span data-testid="book-icon" />,
  ChevronRight: () => <span data-testid="chevron-icon" />,
  FileText: () => <span data-testid="file-text-icon" />,
  ExternalLink: () => <span data-testid="external-link-icon" />,
  CheckCircle2: () => <span data-testid="check-icon" />,
  Clock: () => <span data-testid="clock-icon" />,
  ArrowUpRight: () => <span data-testid="arrow-up-right-icon" />,
}));

describe('BentoGrid', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText(/Vision AI Research/i)).toBeInTheDocument();
  });

  it('displays research section header', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText('Vision AI Research')).toBeInTheDocument();
    expect(screen.getByText(/Building AI systems for early detection/i)).toBeInTheDocument();
  });

  it('renders Hero3D component', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByTestId('hero3d')).toBeInTheDocument();
  });

  it('displays Neural Vision System showcase title', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText('Neural Vision System')).toBeInTheDocument();
    expect(screen.getByText(/Interactive 3D visualization/i)).toBeInTheDocument();
  });

  it('displays primary research focus', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText('Early Glaucoma Detection')).toBeInTheDocument();
  });

  it('displays PhD Progress section', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText('PhD Progress')).toBeInTheDocument();
  });

  it('displays Research Stack section', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText('Research Stack')).toBeInTheDocument();
    const pytorchElements = screen.getAllByText('PyTorch');
    expect(pytorchElements.length).toBeGreaterThan(0);
  });

  it('displays publications section', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText('Selected Publications')).toBeInTheDocument();
  });

  it('displays compute section', () => {
    render(
      <BrowserRouter>
        <BentoGrid />
      </BrowserRouter>
    );
    expect(screen.getByText('Compute')).toBeInTheDocument();
    expect(screen.getByText('NVIDIA GPU')).toBeInTheDocument();
  });
});
