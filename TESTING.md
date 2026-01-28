# Testing Documentation

## Overview

This project uses **Vitest** as the testing framework with **React Testing Library** for component testing. The test suite ensures the portfolio application runs smoothly and is ready for deployment.

## Test Infrastructure

### Tools & Libraries

- **Vitest** - Fast unit test framework powered by Vite
- **React Testing Library** - Testing utilities for React components
- **@testing-library/jest-dom** - Custom Jest matchers for DOM testing
- **@vitest/coverage-v8** - Code coverage using V8 provider
- **jsdom** - JavaScript implementation of web standards for Node.js

### Test Configuration

Tests are configured in `vitest.config.ts` with the following settings:

- **Environment**: jsdom (browser-like environment)
- **Setup Files**: `vitest.setup.ts` (global test configuration)
- **Coverage Provider**: V8
- **Coverage Reporters**: text, json, html, lcov
- **Coverage Thresholds**: Configured for 100% coverage targets

## Running Tests

### Available Commands

```bash
# Run tests in watch mode
npm test

# Run tests once (CI mode)
npm test -- --run

# Run tests with UI dashboard
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Test Output

Tests will output:
- Pass/fail status for each test file
- Total test count and duration
- Coverage summary (when using test:coverage)

## Test Coverage

### Current Coverage Summary

| Component | Coverage | Tests |
|-----------|----------|-------|
| SafePresentationControls | 100% | 3 |
| BentoGrid | 92.59% | 9 |
| Home | 80.64% | 5 |
| Hero | 76.92% | 9 |
| Hero3D | 47.22% | 5 |
| App | 62.5% | 2 |
| Navigation | 36.58% | 2 |

### Total Tests: 35 (all passing)

## Test Structure

### Test Files Location

```
├── __tests__/
│   └── App.test.tsx           # Application routing tests
├── components/
│   └── __tests__/
│       ├── BentoGrid.test.tsx # Research section with Hero3D
│       ├── Hero.test.tsx      # Main hero section
│       ├── Hero3D.test.tsx    # 3D visualization component
│       ├── Home.test.tsx      # Home page integration
│       ├── Navigation.test.tsx# Navigation component
│       └── SafePresentationControls.test.tsx
```

### Test Categories

1. **Unit Tests** - Individual component functionality
2. **Integration Tests** - Component interaction (Home.tsx)
3. **Rendering Tests** - Component render without crashes
4. **Content Tests** - Verify specific content displays
5. **Interaction Tests** - User interactions and state changes

## Mocking Strategy

### Third-Party Libraries

The test suite includes comprehensive mocks for:

1. **React Three Fiber** (`@react-three/fiber`)
   - Canvas component
   - useFrame hook
   - useThree hook

2. **React Three Drei** (`@react-three/drei`)
   - PresentationControls
   - MeshTransmissionMaterial
   - Float, Stars, PerspectiveCamera

3. **Framer Motion**
   - motion components (div, span, a, p)
   - Animation hooks (useMotionValue, useTransform, useInView)
   - AnimatePresence

4. **Lucide React** (Icon library)
   - All icons used in the application

### WebGL & Browser APIs

Mocks are provided for:
- `window.matchMedia`
- `IntersectionObserver`
- `ResizeObserver`
- `HTMLCanvasElement.getContext` (WebGL/WebGL2)
- `HTMLMediaElement` methods

## Hero3D Background Fix

### Issue
The Hero3D component was created but not integrated into the application, making it invisible to users.

### Solution
Integrated Hero3D into the BentoGrid research section as an interactive "Neural Vision System" showcase:

```typescript
// components/BentoGrid.tsx
import { Hero3D } from './Hero3D';

// Added full-width showcase card
<div className="md:col-span-12">
  <GlassCard className="!p-0 overflow-hidden">
    <div className="p-6 pb-4">
      <h3>Neural Vision System</h3>
      <p>Interactive 3D visualization...</p>
    </div>
    <Hero3D />
  </GlassCard>
</div>
```

### Verification
- ✅ Hero3D component is now visible in the research section
- ✅ Interactive 3D visualization works (drag to explore)
- ✅ Build succeeds without errors
- ✅ All tests pass including Hero3D integration test

## Deployment Readiness

### Pre-Deployment Checklist

- [x] All tests passing (35/35)
- [x] Build completes successfully
- [x] No console errors in production build
- [x] Hero3D background working and integrated
- [x] Code coverage reporting configured
- [x] Test infrastructure documented

### Build Verification

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Production Build Output

The build generates optimized chunks:
- **vendor-react**: React core libraries
- **vendor-three**: Three.js and React Three Fiber (for 3D)
- **vendor-motion**: Framer Motion (animations)
- **vendor-icons**: Lucide React (icons)

All assets are code-split and lazy-loaded for optimal performance.

## Continuous Integration

### Recommended CI Pipeline

```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test -- --run
      - run: npm run build
```

## Troubleshooting

### Common Issues

1. **Tests fail with "Cannot find module"**
   - Solution: Run `npm install` to ensure all dependencies are installed

2. **WebGL-related errors**
   - Solution: Check `vitest.setup.ts` for proper WebGL mocking

3. **Coverage reports not generating**
   - Solution: Ensure @vitest/coverage-v8 is installed

### Getting Help

For issues with:
- **Vitest**: https://vitest.dev/
- **React Testing Library**: https://testing-library.com/react
- **Test coverage**: Check `coverage/index.html` for detailed reports

## Future Improvements

- [ ] Add E2E tests with Playwright
- [ ] Increase coverage for remaining components
- [ ] Add performance benchmarks
- [ ] Implement visual regression testing
- [ ] Add accessibility (a11y) testing

## Contributing

When adding new features:
1. Write tests for new components
2. Ensure existing tests still pass
3. Update this documentation if needed
4. Run `npm run test:coverage` to verify coverage

---

**Last Updated**: January 2026  
**Test Framework**: Vitest v4.0.18  
**Coverage**: 35 tests, focusing on critical deployment components
