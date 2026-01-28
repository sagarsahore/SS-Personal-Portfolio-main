import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';

// Mock all child components
vi.mock('../Hero', () => ({
  Hero: () => <div data-testid="hero">Hero</div>,
}));

vi.mock('../NeuralBackground', () => ({
  NeuralBackground: () => <div data-testid="neural-background">Background</div>,
}));

vi.mock('../Navigation', () => ({
  Navigation: () => <nav data-testid="navigation">Navigation</nav>,
}));

vi.mock('../SectionWrapper', () => ({
  SectionWrapper: ({ children }: any) => <div data-testid="section-wrapper">{children}</div>,
}));

vi.mock('../LogoTicker', () => ({
  LogoTicker: () => <div data-testid="logo-ticker">LogoTicker</div>,
}));

vi.mock('../About', () => ({
  About: () => <div data-testid="about">About</div>,
}));

vi.mock('../Projects', () => ({
  Projects: () => <div data-testid="projects">Projects</div>,
}));

vi.mock('../Experience', () => ({
  Experience: () => <div data-testid="experience">Experience</div>,
}));

vi.mock('../Education', () => ({
  Education: () => <div data-testid="education">Education</div>,
}));

vi.mock('../Certifications', () => ({
  Certifications: () => <div data-testid="certifications">Certifications</div>,
}));

vi.mock('../BentoGrid', () => ({
  BentoGrid: () => <div data-testid="bento-grid">BentoGrid</div>,
}));

vi.mock('../Testimonials', () => ({
  Testimonials: () => <div data-testid="testimonials">Testimonials</div>,
}));

vi.mock('../Newsletter', () => ({
  Newsletter: () => <div data-testid="newsletter">Newsletter</div>,
}));

vi.mock('../Contact', () => ({
  Contact: () => <div data-testid="contact">Contact</div>,
}));

describe('Home', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByTestId('hero')).toBeInTheDocument();
  });

  it('renders NeuralBackground', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByTestId('neural-background')).toBeInTheDocument();
  });

  it('renders Navigation', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders LogoTicker', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByTestId('logo-ticker')).toBeInTheDocument();
  });

  it('displays footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByText(/© 2025 Lab of Neural Dynamics/i)).toBeInTheDocument();
  });
});
