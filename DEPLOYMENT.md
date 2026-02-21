# Deployment Guide

## Project Information

**Project Name:** Elegant Product Showcase Website  
**Stack:** Vite + React + TypeScript + Tailwind CSS  
**Version:** 1.0.0  

## Quick Start

### Development
```bash
npm install
npm run dev
```
The dev server will run on `http://localhost:5173` (or next available port)

### Production Build
```bash
npm run build
```
Output will be in the `dist/` directory, ready for deployment.

## Technologies

- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **React 18.3.1** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible components
- **Motion/React** - Smooth animations
- **Recharts** - Data visualization
- **React Router** - Client-side routing

## Project Structure

```
├── src/
│   ├── main.tsx              # Application entry point
│   ├── app/
│   │   ├── App.tsx          # Main component
│   │   ├── components/      # React components
│   │   │   ├── ui/         # UI component library (shadcn/ui)
│   │   │   ├── utils/      # Utility components
│   │   │   └── [sections]  # Page sections
│   │   └── ...
│   └── styles/              # Global CSS files
├── public/                   # Static assets
├── dist/                     # Build output (generated)
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── postcss.config.mjs        # PostCSS configuration
└── index.html               # HTML entry point
```

## Deployment

### GitHub Pages
1. Push to GitHub
2. In repository settings, enable GitHub Pages
3. Set source to `dist/` folder from `main` branch
4. Or use automated deployment with CI/CD

### Other Hosting
1. Run `npm run build` locally
2. Upload contents of `dist/` folder to your hosting provider
3. Ensure server redirects to `index.html` for SPA routing

## Environment Setup

No environment variables required for development or production.

## Performance Optimizations

- ✅ Code splitting with Vite
- ✅ Lazy loading of components
- ✅ CSS preprocessing with Tailwind
- ✅ Image optimization via Unsplash CDN
- ✅ Production build minification

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Check for Vulnerabilities
```bash
npm audit
```

## Features

- Responsive design (mobile-first)
- Dark mode support
- Smooth animations and transitions
- SEO-optimized with meta tags
- Accessible components (WCAG 2.1)
- Fast page load times

## License

MIT License - Feel free to use this project for personal or commercial purposes.

---

**Last Updated:** February 20, 2026
