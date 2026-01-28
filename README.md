<div align="center">

# 🚀 Sagar Sahore - AI Systems Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://www.sagarsahore.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)](https://github.com/sagarsahore/SS-Personal-Portfolio-main/actions)
[![Tests](https://img.shields.io/badge/tests-35%20passing-success?style=for-the-badge)](https://github.com/sagarsahore/SS-Personal-Portfolio-main)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

**A cutting-edge portfolio showcasing AI research, full-stack engineering, and cloud architecture expertise**

[Live Demo](https://www.sagarsahore.com) · [Report Bug](https://github.com/sagarsahore/SS-Personal-Portfolio-main/issues) · [Request Feature](https://github.com/sagarsahore/SS-Personal-Portfolio-main/issues)

</div>

---

## 📸 Screenshots

<div align="center">

### Hero Section with Interactive 3D Elements
*Features animated role carousel, statistics counters, and floating tech badges*

### Research Section with Neural Vision System
*Interactive 3D visualization of computational vision architecture powered by Three.js*

### Projects Showcase
*Comprehensive grid showcasing flagship projects across AI/ML, Cloud Architecture, and CRM solutions*

### Certifications & Experience Timeline
*Professional journey with interactive 3D certification badges*

</div>

---

## 🎯 Purpose

This portfolio serves as a comprehensive showcase of my expertise spanning three interconnected domains:

### 🔬 **Research**
- PhD Candidate in Computer Vision at University of Auckland
- Focus on early detection of sight-threatening eye diseases using deep learning
- Multimodal fusion of fundus images with clinical metadata
- Published work in medical AI and computer vision

### 🏗️ **Engineering**
- Cloud & MLOps architecture for scalable AI systems
- Full-stack development with modern web technologies
- Enterprise data pipelines and real-time processing
- Production deployment of machine learning models

### 💼 **Consulting**
- CRM implementation and optimization (Salesforce)
- AI-driven business transformation
- Decision intelligence systems
- Technical leadership and systems strategy

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.2** - Modern component-based UI library
- **TypeScript 5.8** - Type-safe JavaScript for robust development
- **Vite 6.2** - Lightning-fast build tool and dev server

### **3D Graphics & Animation**
- **Three.js 0.160** - WebGL-based 3D rendering engine
- **@react-three/fiber 8.15** - React renderer for Three.js
- **@react-three/drei 9.99** - Useful helpers for React Three Fiber
- **Framer Motion 10.16** - Production-ready motion library
- **Framer Motion 3D** - 3D animation extensions

### **Styling & UI**
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Tailwind Typography** - Beautiful typographic defaults
- **PostCSS & Autoprefixer** - CSS processing and compatibility
- **Lucide React 0.344** - Beautiful hand-crafted icons

### **Routing & Navigation**
- **React Router DOM 6.30** - Client-side routing solution
- **React Router 6.30** - Core routing library

### **Testing & Quality**
- **Vitest 4.0** - Blazing fast unit test framework
- **React Testing Library 16.3** - Testing utilities for React
- **@vitest/coverage-v8** - Code coverage reporting
- **jsdom 27.4** - JavaScript implementation of web standards
- **@testing-library/jest-dom** - Custom Jest matchers

### **Development Tools**
- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **Git** - Version control

---

## 🎨 Key Features

### **🌟 Interactive 3D Experiences**
- **Hero3D Neural Vision System** - Drag-to-explore 3D visualization of AI architecture
- **Glass Morphism Design** - Modern frosted glass aesthetics inspired by VisionOS
- **Particle Systems** - Dynamic data stream visualizations
- **Interactive 3D Badges** - Animated certification and skill displays

### **⚡ Performance Optimizations**
- **Code Splitting** - Lazy loading for optimal initial load
- **Chunk Optimization** - Separate vendor bundles (React, Three.js, Motion, Icons)
- **Asset Optimization** - WebP/AVIF images with fallbacks
- **Tree Shaking** - Elimination of unused code
- **Minification** - Production-ready compressed builds

### **🧪 Testing Infrastructure**
- **35 Comprehensive Tests** - Covering critical components
- **92.59% Coverage** - For core BentoGrid with Hero3D
- **100% Coverage** - SafePresentationControls component
- **Mock Strategies** - Three.js, Framer Motion, WebGL contexts
- **CI/CD Ready** - Automated testing pipeline

### **📱 Responsive Design**
- Mobile-first approach with breakpoints
- Touch-optimized interactions
- Adaptive layouts for all screen sizes
- Cross-browser compatibility

### **♿ Accessibility**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible

---

## 🚀 Getting Started

### **Prerequisites**

- **Node.js** v18.0.0 or higher
- **npm** v8.0.0 or higher
- Modern web browser with WebGL support

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/sagarsahore/SS-Personal-Portfolio-main.git
   cd SS-Personal-Portfolio-main
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   > Note: `--legacy-peer-deps` flag is needed due to peer dependency conflicts with framer-motion-3d

3. **Set up environment variables (Optional)**
   ```bash
   # Create .env.local file
   echo "GEMINI_API_KEY=your_api_key_here" > .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📦 Build & Deployment

### **Production Build**

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

**Build Output:**
- `dist/` - Production-ready static files
- Optimized JavaScript chunks (~1.5MB total, gzipped: ~360KB)
- Compressed CSS (~123KB, gzipped: ~18KB)
- Optimized images and assets

### **GitHub Pages Deployment**

This portfolio is automatically deployed to GitHub Pages on every push to `main`:

**Automatic Deployment:**
1. Push changes to `main` branch
2. GitHub Actions workflow triggers
3. Builds and deploys to GitHub Pages
4. Available at [www.sagarsahore.com](https://www.sagarsahore.com)

**Manual Deployment:**
1. Go to **Actions** tab in GitHub
2. Select **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"**

**Configuration Files:**
- `.github/workflows/deploy.yml` - CI/CD pipeline
- `vite.config.ts` - Build configuration
- `public/CNAME` - Custom domain setup
- `public/.nojekyll` - Bypass Jekyll processing
- `public/404.html` - SPA routing fallback

---

## 🧪 Testing

### **Run Tests**

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

### **Test Coverage Summary**

| Component | Coverage | Tests |
|-----------|----------|-------|
| SafePresentationControls | 100% | 3 |
| BentoGrid (with Hero3D) | 92.59% | 9 |
| Home | 80.64% | 5 |
| Hero | 76.92% | 9 |
| Hero3D | 47.22% | 5 |
| App | 62.5% | 2 |
| Navigation | 36.58% | 2 |

**Total: 35 tests - All passing ✅**

### **Testing Documentation**

For detailed testing information, see [TESTING.md](TESTING.md):
- Test infrastructure setup
- Writing new tests
- Mocking strategies
- Running tests in CI/CD
- Troubleshooting guide

---

## 👨‍💻 Role & Contributions

As the **sole developer and designer** of this portfolio, I:

### **🎨 Design & UX**
- Conceptualized the VisionOS-inspired glass morphism aesthetic
- Designed interactive 3D experiences with Three.js
- Created responsive layouts with mobile-first approach
- Implemented smooth animations and micro-interactions

### **💻 Development**
- Built the entire application from scratch using React & TypeScript
- Integrated complex 3D graphics with Three.js and React Three Fiber
- Implemented comprehensive testing suite with 35 tests
- Optimized performance with code splitting and lazy loading
- Set up CI/CD pipeline with GitHub Actions

### **🔬 Content & Research**
- Curated and presented research work in computational vision
- Documented projects spanning AI/ML, Cloud, and CRM domains
- Showcased certifications and professional achievements
- Created technical writing samples and case studies

### **🚀 DevOps & Deployment**
- Configured Vite build system for optimal production bundles
- Set up automated deployment to GitHub Pages
- Implemented custom domain with SSL
- Managed version control and release strategy

---

## 📂 Project Structure

```
SS-Personal-Portfolio-main/
├── components/              # React components
│   ├── Hero.tsx            # Main hero section
│   ├── Hero3D.tsx          # Interactive 3D visualization
│   ├── BentoGrid.tsx       # Research showcase grid
│   ├── Navigation.tsx      # Site navigation
│   ├── Home.tsx            # Home page layout
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Work experience timeline
│   ├── Education.tsx       # Education section
│   ├── Certifications.tsx  # Certifications display
│   ├── Contact.tsx         # Contact form
│   └── __tests__/          # Component tests
│       ├── Hero.test.tsx
│       ├── Hero3D.test.tsx
│       ├── BentoGrid.test.tsx
│       └── ...
├── public/                  # Static assets
│   ├── images/             # Image files
│   ├── CNAME               # Custom domain
│   └── 404.html            # SPA fallback
├── data/                    # Content data files
├── __tests__/               # Root-level tests
├── .github/workflows/       # CI/CD pipelines
├── App.tsx                  # Root application component
├── index.tsx               # Application entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── vitest.config.ts        # Test configuration
├── vitest.setup.ts         # Test environment setup
├── tailwind.config.cjs     # Tailwind CSS config
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
├── README.md               # This file
├── TESTING.md              # Testing documentation
└── DEPLOYMENT_SUMMARY.md   # Deployment guide
```

---

## 🔧 Configuration Files

### **Build Configuration**
- `vite.config.ts` - Vite build and dev server settings
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.cjs` - Tailwind CSS customization
- `postcss.config.cjs` - PostCSS plugins

### **Testing Configuration**
- `vitest.config.ts` - Vitest test runner settings
- `vitest.setup.ts` - Global test environment setup
- Coverage thresholds and reporters

### **Deployment Configuration**
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain (www.sagarsahore.com)
- `public/.nojekyll` - Disable Jekyll on GitHub Pages

---

## 🐛 Known Issues & Limitations

### **Current Limitations**
- Three.js bundle size is large (~1MB) - mitigated with code splitting
- Some animations may be choppy on low-end devices
- WebGL required for 3D features (graceful fallback needed)

### **Browser Compatibility**
- **Recommended:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Required Features:** ES6+, WebGL 2.0, CSS Grid, Flexbox
- **Not Supported:** IE11 and below

---

## 🛣️ Roadmap

### **Planned Features**
- [ ] Dark/Light theme toggle
- [ ] Blog section with technical articles
- [ ] Resume download in multiple formats
- [ ] Contact form with backend integration
- [ ] Analytics dashboard integration
- [ ] Progressive Web App (PWA) support
- [ ] Internationalization (i18n) support

### **Performance Improvements**
- [ ] Implement service worker for offline support
- [ ] Further optimize Three.js bundle size
- [ ] Add image lazy loading with intersection observer
- [ ] Implement preload hints for critical assets

### **Testing Enhancements**
- [ ] Add E2E tests with Playwright
- [ ] Increase coverage to 90%+ for all components
- [ ] Visual regression testing
- [ ] Accessibility testing automation

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Sagar Sahore**

- 🌐 Website: [www.sagarsahore.com](https://www.sagarsahore.com)
- 💼 LinkedIn: [linkedin.com/in/sagarsahore](https://linkedin.com/in/sagarsahore)
- 🐙 GitHub: [github.com/sagarsahore](https://github.com/sagarsahore)
- 📧 Email: sagarsahore.work@gmail.com

---

## 🙏 Acknowledgments

- **Three.js** - Amazing 3D library that powers the interactive visualizations
- **Framer Motion** - Smooth animations made simple
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide** - Beautiful open-source icon library
- **React Three Fiber** - React renderer for Three.js
- **Vitest** - Fast and modern testing framework
- **Vite** - Next generation frontend tooling

---

## 📊 Project Statistics

- **Total Lines of Code:** ~15,000+
- **Components:** 30+
- **Tests:** 35 (all passing)
- **Dependencies:** 11 production, 16 development
- **Build Time:** ~7.6 seconds
- **Bundle Size:** 1.5 MB (360 KB gzipped)
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)

---

<div align="center">

**⭐ Star this repo if you find it interesting!**

Made with ❤️ by [Sagar Sahore](https://github.com/sagarsahore)

</div>
