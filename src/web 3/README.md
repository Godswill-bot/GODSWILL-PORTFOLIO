# FLAVOUR - Modern Fashion E-Commerce Website

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A beautiful, fully responsive fashion e-commerce website built with React and TypeScript. Features modern UI/UX design, smooth animations, and complete functionality across all pages.

## 🌟 Features

### Navigation & User Experience
- **Responsive Header** - Sticky navigation with brand links, search, and cart
- **Mobile Menu** - Slide-out hamburger menu for mobile devices
- **Smooth Animations** - Page transitions, hover effects, and scroll animations
- **Video Modal** - Embedded video showcase with overlay

### Shopping Features
- **Product Collections** - Organized seasonal collections (Winter, Spring, Summer, etc.)
- **Brand Showcase** - Featured fashion brands with logos and descriptions
- **New Arrivals** - Latest products with badges and special tags
- **Sales Section** - Discounted items with original/sale price display
- **Shopping Cart** - Full cart management with quantity controls and checkout

### Customer Support Pages
- **Contact Page** - Contact form, email, phone, live chat, and store location
- **FAQ Page** - Interactive accordion with categorized questions
- **Shipping Information** - Delivery options, tracking, and international shipping
- **Returns & Exchanges** - Easy 30-day return policy with step-by-step guide
- **Size Guide** - Interactive size charts for women's, men's, and kids' clothing

### Company Pages
- **About Us** - Company story, values, team, and statistics
- **Careers** - Job listings with department filters and application
- **Privacy Policy** - Comprehensive data protection information
- **Terms of Service** - Legal terms and conditions

### Footer
- **Newsletter Subscription** - Email signup with validation
- **Quick Links** - Navigation to all main sections
- **Social Media** - Links to Instagram, Facebook, Twitter, Pinterest
- **Contact Information** - Address, email, phone

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "web 3"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
web 3/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Main navigation header
│   │   ├── Header.css
│   │   ├── Hero.tsx            # Landing page hero section
│   │   ├── Hero.css
│   │   ├── Footer.tsx          # Site footer with links
│   │   ├── Footer.css
│   │   ├── VideoModal.tsx      # Video popup modal
│   │   ├── VideoModal.css
│   │   ├── MobileMenu.tsx      # Mobile hamburger menu
│   │   └── MobileMenu.css
│   ├── pages/
│   │   ├── Collection.tsx      # Seasonal collections
│   │   ├── Brands.tsx          # Brand showcase
│   │   ├── New.tsx             # New arrivals
│   │   ├── Sales.tsx           # Sale items
│   │   ├── Shop.tsx            # Main shop page
│   │   ├── Cart.tsx            # Shopping cart
│   │   ├── Contact.tsx         # Contact form
│   │   ├── FAQ.tsx             # FAQ accordion
│   │   ├── About.tsx           # About company
│   │   ├── Shipping.tsx        # Shipping info
│   │   ├── Returns.tsx         # Returns policy
│   │   ├── SizeGuide.tsx       # Size charts
│   │   ├── Careers.tsx         # Job listings
│   │   ├── Privacy.tsx         # Privacy policy
│   │   ├── Terms.tsx           # Terms of service
│   │   └── Pages.css           # Shared page styles
│   ├── App.tsx                 # Main app with routing
│   ├── App.css                 # Global styles
│   ├── index.tsx               # React entry point
│   └── index.css               # Base styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Teal | `#40CFC3` | Primary buttons, accents |
| Pink | `#FFB5C5` | Decorative elements |
| Dark | `#1a1a1a` | Text, headers |
| Light Gray | `#f8f8f8` | Backgrounds |

### Typography
- **Dancing Script** - Logo and decorative headings
- **Poppins** - Body text and UI elements

### Animations
- Fade-in page transitions
- Slide-up element reveals
- Scale effects on hover
- Bounce animations for CTAs
- Smooth modal transitions

## 📱 Responsive Breakpoints

| Breakpoint | Description |
|------------|-------------|
| 1200px+ | Full desktop layout |
| 1024px | Large tablets/small desktops |
| 768px | Tablets |
| 480px | Mobile phones |

## 🛠️ Built With

- **React 18.2** - UI library
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **CSS3** - Styling (no frameworks)
- **Google Fonts** - Typography

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts development server |
| `npm build` | Creates production build |
| `npm test` | Runs test suite |
| `npm eject` | Ejects from Create React App |

## 🔗 Routes

| Path | Page |
|------|------|
| `/` | Home (Hero) |
| `/collection` | Collections |
| `/brands` | Brands |
| `/new` | New Arrivals |
| `/sales` | Sale Items |
| `/shop` | Shop All |
| `/cart` | Shopping Cart |
| `/contact` | Contact Us |
| `/faq` | FAQ |
| `/about` | About Us |
| `/shipping` | Shipping Info |
| `/returns` | Returns Policy |
| `/size-guide` | Size Guide |
| `/careers` | Careers |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👏 Acknowledgments

- Design inspiration from modern fashion e-commerce sites
- Icons and emojis for visual enhancement
- Google Fonts for typography

---

**FLAVOUR** - *Fashion Redefined* ✨
