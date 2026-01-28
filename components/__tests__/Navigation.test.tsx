import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '../Navigation';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, className, ...props }: any) => <nav className={className} {...props}>{children}</nav>,
    div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    a: ({ children, className, href, ...props }: any) => <a className={className} href={href} {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Menu: () => <span data-testid="menu-icon" />,
  X: () => <span data-testid="close-icon" />,
  FileText: () => <span data-testid="file-text-icon" />,
  ArrowLeft: () => <span data-testid="arrow-left-icon" />,
}));

describe('Navigation', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Research/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });
});
