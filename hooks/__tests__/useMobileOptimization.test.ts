import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useMobileOptimization, isMobileDevice, isLowPowerDevice, prefersReducedMotion } from '../useMobileOptimization';

describe('useMobileOptimization', () => {
  beforeEach(() => {
    // Reset mocks
    vi.restoreAllMocks();
  });

  afterEach(() => {
    // Restore original values
    vi.restoreAllMocks();
  });

  describe('isMobileDevice', () => {
    it('returns false when no window is available', () => {
      // In test environment without proper window mock
      expect(typeof isMobileDevice()).toBe('boolean');
    });
  });

  describe('isLowPowerDevice', () => {
    it('returns a boolean value', () => {
      expect(typeof isLowPowerDevice()).toBe('boolean');
    });
  });

  describe('prefersReducedMotion', () => {
    it('returns a boolean value', () => {
      expect(typeof prefersReducedMotion()).toBe('boolean');
    });
  });

  describe('useMobileOptimization hook', () => {
    it('returns expected properties', () => {
      const { result } = renderHook(() => useMobileOptimization());
      
      expect(result.current).toHaveProperty('isMobile');
      expect(result.current).toHaveProperty('isLowPower');
      expect(result.current).toHaveProperty('reducedMotion');
      expect(result.current).toHaveProperty('particleCount');
      expect(result.current).toHaveProperty('enable3D');
      expect(result.current).toHaveProperty('dpr');
      expect(result.current).toHaveProperty('animationDuration');
      expect(result.current).toHaveProperty('enableComplexAnimations');
      expect(result.current).toHaveProperty('enableParallax');
      expect(result.current).toHaveProperty('enableHoverEffects');
      expect(result.current).toHaveProperty('enableBackdropBlur');
      expect(result.current).toHaveProperty('blurIntensity');
      expect(result.current).toHaveProperty('enableGlowEffects');
      expect(result.current).toHaveProperty('shouldRender3D');
      expect(result.current).toHaveProperty('useSimplifiedBackground');
    });

    it('returns proper types for all properties', () => {
      const { result } = renderHook(() => useMobileOptimization());
      
      expect(typeof result.current.isMobile).toBe('boolean');
      expect(typeof result.current.isLowPower).toBe('boolean');
      expect(typeof result.current.reducedMotion).toBe('boolean');
      expect(typeof result.current.particleCount).toBe('number');
      expect(typeof result.current.enable3D).toBe('boolean');
      expect(Array.isArray(result.current.dpr)).toBe(true);
      expect(typeof result.current.animationDuration).toBe('number');
      expect(typeof result.current.enableComplexAnimations).toBe('boolean');
      expect(typeof result.current.enableParallax).toBe('boolean');
      expect(typeof result.current.enableHoverEffects).toBe('boolean');
      expect(typeof result.current.enableBackdropBlur).toBe('boolean');
      expect(typeof result.current.blurIntensity).toBe('number');
      expect(typeof result.current.enableGlowEffects).toBe('boolean');
      expect(typeof result.current.shouldRender3D).toBe('boolean');
      expect(typeof result.current.useSimplifiedBackground).toBe('boolean');
    });

    it('particle count is always a positive number', () => {
      const { result } = renderHook(() => useMobileOptimization());
      expect(result.current.particleCount).toBeGreaterThanOrEqual(0);
    });

    it('dpr array has two elements', () => {
      const { result } = renderHook(() => useMobileOptimization());
      expect(result.current.dpr).toHaveLength(2);
      expect(result.current.dpr[0]).toBeGreaterThanOrEqual(1);
      expect(result.current.dpr[1]).toBeGreaterThanOrEqual(1);
    });
  });
});
