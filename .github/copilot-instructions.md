# React Multi-Pages Project - Custom Instructions

## Project Overview
A modern React application built with Vite, TypeScript, Mantine UI, Tailwind CSS, and React Router.

## Technology Stack
- **Vite**: Fast build tool and development server
- **React 19**: UI library with latest features
- **TypeScript**: Type-safe development
- **React Router**: Client-side routing for multi-page navigation
- **Mantine UI**: Comprehensive component library
- **Tailwind CSS**: Utility-first CSS framework

## Project Structure
```
src/
├── components/
│   └── Navigation.tsx    # Navigation bar for page links
├── pages/
│   ├── HomePage.tsx      # Home page
│   ├── AboutPage.tsx     # About page
│   ├── ContactPage.tsx   # Contact page with form
│   └── InfoPage.tsx      # Information page with cards
├── App.tsx               # Main app with router configuration
├── main.tsx              # React entry point
└── index.css             # Tailwind CSS directives
```

## Available Pages
1. **Home** (`/`) - Landing page with links to other pages
2. **About** (`/about`) - Information about the project and tech stack
3. **Contact** (`/contact`) - Contact form
4. **Info** (`/info`) - Project information with feature cards

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173/`

### Build
```bash
npm run build
```
Builds the project for production in the `dist/` folder

### Preview
```bash
npm run preview
```
Preview the production build locally

### Lint
```bash
npm run lint
```
Run ESLint to check code quality

## Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Routing library
- `@mantine/core` - Component library
- `@mantine/hooks` - Custom hooks
- `tailwindcss` - CSS framework
- `postcss` - CSS processor
- `autoprefixer` - CSS vendor prefixes

## Development Guidelines
- All pages are interconnected with navigation links
- Use Mantine components from `@mantine/core` for consistent UI
- Use Tailwind utility classes for custom styling
- TypeScript is enforced for type safety
- All pages are accessible via the navigation bar and internal links

## Getting Started
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:5173/` in your browser
4. Navigate between pages using links

## Notes
- The Navigation component is displayed on all pages via the Router layout
- Each page exports a default React component
- React Router ensures client-side navigation without full page reloads
