# CLAUDE.MD - Project Documentation

## Project Overview
**Project Name**: Testai - Amministrazioni Condominiali
**Type**: Static website for condominium management services
**Language**: Italian (IT)
**Purpose**: Marketing and informational website for Testai condominium administration services

## Technology Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables
- **JavaScript**: (script.js present in images folder)
- **Fonts**: Google Fonts - Montserrat (400, 700 weights)

## Project Structure
```
condomanager/
├── index.html              # Main landing page
├── images/
│   ├── global.css         # Main stylesheet
│   ├── script.js          # JavaScript functionality
│   ├── testai-logo-white.png
│   ├── estia-logo-white.png
│   ├── presenza.png       # Service icon
│   ├── trasparenza.png    # Service icon
│   ├── risparmio.png      # Service icon
│   └── sicurezza.png      # Service icon
└── CLAUDE.MD              # This file
```

## Design System

### Color Palette
```css
--blue-testai: #4071b4;      /* Primary brand color */
--yellow-testai: #ffbb02;    /* Accent/CTA color */
--dark-blue: #102136;        /* Dark backgrounds */
--light-blue-links: #8db9f2; /* Footer links */
--text-gray: #4d5d6d;        /* Body text */
```

### Typography
- **Font Family**: Montserrat (sans-serif)
- **Weights**: 400 (regular), 700 (bold)
- **Text Transform**: Uppercase for headings and navigation

### Layout
- **Max Container Width**: 1250px (95% width on smaller screens)
- **Grid Layout**: 4-column grid for services section (1350px max)
- **Responsive**: Mobile-first approach expected

## Key Components

### Header (index.html:12-29)
- Sticky navigation (85px height)
- Blue background (#4071b4)
- Contains: Logo, Navigation menu, CTA button
- Navigation items: Home, Chi Siamo, Servizi, Contatti

### Hero Section (index.html:32-38)
- Height: 500px
- Dark blue background
- Centered text layout
- Main headline and subtitle

### Services Grid (index.html:40-67)
Four main service cards showcasing:
1. **PRESENZA** (Presence) - Periodic monitoring and assistance
2. **TRASPARENZA** (Transparency) - Simplified reporting and cost management
3. **RISPARMIO** (Savings) - Professional expertise for eliminating waste
4. **SICUREZZA** (Security) - Rigorous compliance and documentation

### Footer (index.html:70-93)
- 3-column grid layout (2fr 1fr 1fr)
- Sections: Company info, Useful links, Contact information
- Contact: info@testai.homes, +39 02 123 4567
- Copyright: 2026 Testai Amministrazioni

## File Conventions
- Images stored in `/images/` directory
- CSS uses BEM-like naming (e.g., `.ct-header`, `.service-card`)
- Semantic HTML5 elements used throughout

## Brand Identity
**Testai** positions itself as:
- Transparent and innovative
- Professional condominium administrators
- Focused on: Presence, Transparency, Savings, Security

## Git Status (as of last check)
- Current branch: `main`
- Modified files: `images/global.css`, `index.html`
- Untracked files: Logo images and script.js in images folder

## Development Notes
- The project appears to be part of a GitHub Pages site (fdelse.github.io)
- Hosted locally on Laragon during development
- CSS uses modern features (CSS variables, Grid, Flexbox)
- No build process currently configured (vanilla HTML/CSS/JS)

## Future Considerations
- Add mobile responsive breakpoints to CSS
- Implement JavaScript functionality in script.js
- Consider adding form functionality for "Richiedi Preventivo" CTA
- Add proper image alt text for accessibility
- Consider adding meta tags for SEO
- Fix file path inconsistencies (Testai-logo-white.png vs testai-logo-white.png)

## Contact Information
**Company**: Testai Amministrazioni
**Email**: info@testai.homes
**Phone**: +39 02 123 4567
**Website Domain**: testai.homes (implied)

---
*This document should be updated whenever significant changes are made to the project structure, design system, or technical stack.*
