import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// Mock components
vi.mock('../components/Home', () => ({
  Home: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock('../components/AboutPage', () => ({
  AboutPage: () => <div data-testid="about-page">About Page</div>,
}));

vi.mock('../components/ResearchPage', () => ({
  ResearchPage: () => <div data-testid="research-page">Research Page</div>,
}));

vi.mock('../components/ProjectsPage', () => ({
  ProjectsPage: () => <div data-testid="projects-page">Projects Page</div>,
}));

describe('App', () => {
  it('renders without crashing', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  it('renders loading screen and then home page', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });
});
