# LENS Photography Website

## Overview
LENS Photography is a modern, responsive photography portfolio and business website built with **React** and **TypeScript**. The website showcases professional photography services with an elegant, minimalist design that emphasizes visual storytelling.

## Tech Stack
- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Pure CSS (no frameworks)
- **Routing:** React Router DOM v6
- **Fonts:** Google Fonts (Playfair Display, Inter)

## Pages & Features

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with hero section, projects showcase, story section, services, CTA, and testimonials |
| **My Works** | `/works` | Portfolio gallery with category filtering (Wedding, Fashion, Architecture, Portrait) and lightbox viewer |
| **Pricing** | `/pricing` | Three pricing tiers (Basic $299, Professional $599, Premium $999), add-ons, and FAQ section |
| **About Us** | `/about` | Company story, team members, statistics, and core values |
| **Contact** | `/contact` | Functional contact form with validation, contact info, social links, and map section |

## Key Features
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Client-side Routing** - Smooth page transitions without reload
- ✅ **Interactive Gallery** - Filter by category, lightbox preview
- ✅ **Form Validation** - Contact form with success feedback
- ✅ **Animated Elements** - Rotating text badges, hover effects, smooth transitions
- ✅ **Mobile Navigation** - Hamburger menu with overlay
- ✅ **Scroll to Top** - Automatic scroll reset on page change
- ✅ **Custom Favicon** - SVG camera lens icon matching brand colors

## Design System
- **Primary Color:** `#1a1a1a` (Dark)
- **Accent Color:** `#e74c3c` (Red)
- **Background:** `#fdf6f0` (Warm Cream)
- **Typography:** Playfair Display (headings), Inter (body)

## Project Structure
```
lens-photography/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Story.tsx
│   │   ├── CTA.tsx
│   │   ├── Testimonials.tsx
│   │   └── ScrollToTop.tsx
│   ├── pages/             # Route-specific pages
│   │   ├── Home.tsx
│   │   ├── Works.tsx
│   │   ├── Pricing.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx            # Main app with routing
│   └── index.tsx          # Entry point
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone or navigate to the project
cd lens-photography

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm start
```
The app will run at **http://localhost:3000**

### Building for Production
```bash
npm run build
```
This creates an optimized production build in the `build/` folder.

## Target Audience
Professional photographers, photography studios, and creative agencies looking for a modern portfolio website to showcase their work and attract clients.

## Screenshots

### Home Page
- Hero section with "Creativity together!" headline
- Animated play button with rotating text
- Service tabs (Alpha Graphile, Lifestyle Photography, Image Restoration)

### Works Gallery
- Filterable portfolio grid
- Lightbox image viewer
- Category badges

### Pricing
- Three-tier pricing cards
- Popular plan highlight
- Add-on services

### Contact
- Functional contact form
- Contact information sidebar
- Social media links

## License
This project is for demonstration purposes.

---

Built with ❤️ using React + TypeScript
