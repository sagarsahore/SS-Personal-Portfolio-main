import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

// Mock framer-motion
vi.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef((props: any, ref: any) => <div {...props} ref={ref} />),
      span: React.forwardRef((props: any, ref: any) => <span {...props} ref={ref} />),
      a: React.forwardRef((props: any, ref: any) => <a {...props} ref={ref} />),
      p: React.forwardRef((props: any, ref: any) => <p {...props} ref={ref} />),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useMotionValue: () => ({ get: () => 0, set: vi.fn() }),
    useTransform: () => '0',
    animate: vi.fn(),
    useInView: () => true,
  };
});

// Mock lucide-react
vi.mock('lucide-react', () => ({
  ArrowRight: () => <span data-testid="arrow-right" />,
  FileText: () => <span data-testid="file-text" />,
  Github: () => <span data-testid="github" />,
  Linkedin: () => <span data-testid="linkedin" />,
  Mail: () => <span data-testid="mail" />,
  Cloud: () => <span data-testid="cloud" />,
  Cpu: () => <span data-testid="cpu" />,
  BarChart3: () => <span data-testid="bar-chart" />,
  Eye: () => <span data-testid="eye" />,
  Sparkles: () => <span data-testid="sparkles" />,
  GraduationCap: () => <span data-testid="graduation-cap" />,
}));

// Mock the mobile optimization hook to enable complex animations in tests
vi.mock('../../hooks/useMobileOptimization', () => ({
  useMobileOptimization: () => ({
    isMobile: false,
    isLowPower: false,
    reducedMotion: false,
    animationDuration: 0.8,
    enableComplexAnimations: true,
    enableParallax: true,
    enableHoverEffects: true,
    particleCount: 250,
    enable3D: true,
    dpr: [1, 1.5],
    enableBackdropBlur: true,
    blurIntensity: 12,
    enableGlowEffects: true,
    shouldRender3D: true,
    useSimplifiedBackground: false,
  }),
  isMobileDevice: () => false,
  isLowPowerDevice: () => false,
  prefersReducedMotion: () => false,
  getMobileOptimizedVariants: () => ({}),
}));

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    const elements = screen.getAllByText(/Sagar Sahore/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('displays the main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Designing/i)).toBeInTheDocument();
    expect(screen.getByText(/Intelligent Systems/i)).toBeInTheDocument();
  });

  it('displays PhD Candidate badge', () => {
    render(<Hero />);
    expect(screen.getByText(/PhD Candidate/i)).toBeInTheDocument();
    expect(screen.getByText(/University of Auckland/i)).toBeInTheDocument();
  });

  it('displays statistics counters', () => {
    render(<Hero />);
    const projectsElements = screen.getAllByText(/Projects/i);
    expect(projectsElements.length).toBeGreaterThan(0);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('Superbadges')).toBeInTheDocument();
  });

  it('displays social media links', () => {
    render(<Hero />);
    expect(screen.getByTestId('github')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin')).toBeInTheDocument();
    expect(screen.getByTestId('mail')).toBeInTheDocument();
  });

  it('displays call-to-action buttons', () => {
    render(<Hero />);
    const exploreButton = screen.getByText(/Explore Research/i);
    const projectsButton = screen.getByText(/View Projects/i);
    expect(exploreButton).toBeInTheDocument();
    expect(projectsButton).toBeInTheDocument();
  });

  it('displays resume link', () => {
    render(<Hero />);
    expect(screen.getByText(/Resume/i)).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    const { container } = render(<Hero />);
    const image = container.querySelector('img[alt="Sagar Sahore"]');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/erasebg-transformed.webp');
  });

  it('displays floating badge icons when complex animations are enabled', () => {
    render(<Hero />);
    expect(screen.getByTestId('eye')).toBeInTheDocument();
    expect(screen.getByTestId('cloud')).toBeInTheDocument();
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
    expect(screen.getByTestId('sparkles')).toBeInTheDocument();
    expect(screen.getByTestId('cpu')).toBeInTheDocument();
  });
});
