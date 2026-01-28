import { useState, useEffect, useMemo } from 'react';

/**
 * Mobile detection and performance optimization utilities
 * Provides device capability detection for progressive enhancement
 */

// Detect if device is mobile or has limited performance
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
         || window.innerWidth < 768;
};

// Detect if device is a low-power device (mobile or tablet)
export const isLowPowerDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for mobile device
  const isMobile = isMobileDevice();
  
  // Check for limited hardware concurrency (CPU cores)
  const hasLimitedCPU = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4;
  
  // Check for touch device (often indicates mobile/tablet)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Check device memory if available (Chrome only)
  const hasLimitedMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory !== undefined 
    && (navigator as Navigator & { deviceMemory?: number }).deviceMemory! < 4;
  
  return isMobile || (isTouchDevice && hasLimitedCPU) || hasLimitedMemory;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Hook for responsive performance optimization
 * Returns device capabilities and recommended settings
 */
export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Initial detection
    setIsMobile(isMobileDevice());
    setIsLowPower(isLowPowerDevice());
    setReducedMotion(prefersReducedMotion());
    
    // Listen for resize events
    const handleResize = () => {
      setIsMobile(isMobileDevice());
      setIsLowPower(isLowPowerDevice());
    };
    
    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Memoized performance settings based on device capabilities
  const performanceSettings = useMemo(() => ({
    // 3D rendering settings
    particleCount: reducedMotion ? 0 : (isLowPower ? 50 : (isMobile ? 100 : 250)),
    enable3D: !reducedMotion && !isLowPower,
    dpr: isMobile ? [1, 1] as [number, number] : [1, 1.5] as [number, number],
    
    // Animation settings
    animationDuration: reducedMotion ? 0.01 : (isMobile ? 0.4 : 0.8),
    enableComplexAnimations: !reducedMotion && !isLowPower,
    enableParallax: !isMobile && !reducedMotion,
    enableHoverEffects: !isMobile,
    
    // Visual effects
    enableBackdropBlur: !isLowPower,
    blurIntensity: isLowPower ? 0 : (isMobile ? 8 : 12),
    enableGlowEffects: !isLowPower,
    
    // Performance flags
    shouldRender3D: !reducedMotion && !isLowPower,
    useSimplifiedBackground: reducedMotion || isLowPower,
  }), [isMobile, isLowPower, reducedMotion]);

  return {
    isMobile,
    isLowPower,
    reducedMotion,
    ...performanceSettings,
  };
};

/**
 * Optimized motion variants for framer-motion
 * Provides simplified animations for mobile devices
 */
export const getMobileOptimizedVariants = (isMobile: boolean, reducedMotion: boolean) => ({
  // Section entrance animation
  sectionIn: {
    initial: reducedMotion 
      ? { opacity: 1 } 
      : { opacity: 0, y: isMobile ? 20 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: reducedMotion ? 0.01 : (isMobile ? 0.4 : 0.8),
      ease: [0.22, 1, 0.36, 1]
    }
  },
  
  // Card entrance animation  
  cardIn: {
    initial: reducedMotion 
      ? { opacity: 1 } 
      : { opacity: 0, y: isMobile ? 10 : 20, scale: reducedMotion ? 1 : 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { 
      duration: reducedMotion ? 0.01 : (isMobile ? 0.3 : 0.6),
      ease: [0.25, 1, 0.5, 1]
    }
  },
  
  // Fade in animation
  fadeIn: {
    initial: { opacity: reducedMotion ? 1 : 0 },
    animate: { opacity: 1 },
    transition: { 
      duration: reducedMotion ? 0.01 : (isMobile ? 0.3 : 0.5)
    }
  }
});

export default useMobileOptimization;
