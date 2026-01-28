import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { SafePresentationControls } from '../SafePresentationControls';

// Mock @react-three/fiber
vi.mock('@react-three/fiber', () => ({
  useThree: () => ({ size: { width: 800, height: 600 } }),
}));

// Mock @react-three/drei
vi.mock('@react-three/drei', () => ({
  PresentationControls: ({ children, enabled }: any) => (
    <div data-testid="presentation-controls" data-enabled={enabled}>
      {children}
    </div>
  ),
}));

describe('SafePresentationControls', () => {
  it('renders children', () => {
    const { getByText } = render(
      <SafePresentationControls>
        <mesh data-testid="test-child">Test</mesh>
      </SafePresentationControls>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('enables controls when size is valid', () => {
    const { getByTestId } = render(
      <SafePresentationControls>
        <mesh>Test</mesh>
      </SafePresentationControls>
    );
    const controls = getByTestId('presentation-controls');
    expect(controls).toHaveAttribute('data-enabled', 'true');
  });

  it('disables controls when explicitly disabled', () => {
    const { getByTestId } = render(
      <SafePresentationControls enabled={false}>
        <mesh>Test</mesh>
      </SafePresentationControls>
    );
    const controls = getByTestId('presentation-controls');
    expect(controls).toHaveAttribute('data-enabled', 'false');
  });
});
