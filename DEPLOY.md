# Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- Repository must be public or have GitHub Pages enabled
- `gh-pages` package installed (already in devDependencies)

### Deploy Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the project
   - Push the `dist` folder to the `gh-pages` branch
   - Make it available at: `https://[username].github.io/ddd-presentation/`

### Configuration

The following settings are already configured in the project:

**vite.config.ts:**
```typescript
export default defineConfig({
  base: '/ddd-presentation/',  // Must match your repo name
  plugins: [react()],
})
```

**package.json:**
```json
{
  "homepage": "/ddd-presentation/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Image Paths

Images are automatically handled with the `getImagePath()` utility function that prepends the base URL:
- Development: `/images/example.jpg`
- Production: `/ddd-presentation/images/example.jpg`

### Local Preview

To preview the production build locally:

```bash
npm run preview
```

Or using serve:
```bash
npm run build
serve -s dist
```

### Troubleshooting

**Images not loading:**
- Verify `base` in `vite.config.ts` matches your repository name
- Check that images are in the `public/images/` folder
- Ensure `getImagePath()` is used for all image sources

**404 on refresh:**
- GitHub Pages doesn't support client-side routing by default
- This app uses hash routing which works fine with GitHub Pages

**Build fails:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
