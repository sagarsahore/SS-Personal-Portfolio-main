<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Sagar Sahore - Personal Portfolio

A VisionOS-inspired portfolio website featuring liquid glass aesthetics and 3D interactive elements. Built with React, TypeScript, and Three.js.

View live: [www.sagarsahore.com](https://www.sagarsahore.com)

View your app in AI Studio: https://ai.studio/apps/drive/1C_5kGm2lPZFlEiki8O3PFb8aCcaX-iHb

## Run Locally

**Prerequisites:** Node.js v18 or higher

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key (optional)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

## GitHub Pages Deployment

This site is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch will automatically:
1. Build the site using Vite
2. Deploy to GitHub Pages
3. Be available at your custom domain (www.sagarsahore.com)

### Manual Deployment

You can also trigger a deployment manually:
1. Go to the Actions tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Configuration

The following files are configured for GitHub Pages:

- **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automated deployment
- **`vite.config.ts`** - Base path set to `/` for custom domain
- **`public/CNAME`** - Custom domain configuration
- **`public/.nojekyll`** - Prevents Jekyll processing on GitHub Pages
- **`public/404.html`** - SPA fallback for client-side routing

### First-Time Setup

To enable GitHub Pages for this repository:

1. Go to repository Settings → Pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. The site will deploy automatically on the next push to `main`

## Tech Stack

- React 18.2
- TypeScript
- Vite
- Three.js / React Three Fiber
- Framer Motion
- Tailwind CSS
- Lucide Icons
