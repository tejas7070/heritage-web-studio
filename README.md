# Heritage Web Studio
> **Powered by LogicHub**

Heritage Web Studio is a handcrafted, editorial portfolio website designed for a modern web development agency. Inspired by award-winning creative agencies, this site features clean whitespace, bold typography scales, and subtle micro-interactions to deliver a luxury brand feel.

---

## 🎨 Design Philosophy & Architecture

- **Minimalist & Luxurious**: High-contrast black-and-white layouts with deep `#111111` typography, smooth `#FFFFFF` space intervals, and selective `#2563EB` blue accent highlights.
- **Editorial Typography**: Uses a fluid pairing of Google Fonts: `Outfit` (for body and geometric stats tags) and `Playfair Display` (for fluid, modern italic headings).
- **Aesthetic Texturing**: Features a custom SVG noise canvas layer (`.noise-overlay`) to replicate high-end tactile editorial print.
- **Strictly Handcrafted**: Built from scratch without ThemeForest cards or AI layout patterns.

---

## ✨ Features

- **🚀 Typographic Loader**: A custom percent counting sequence ([Preloader.jsx](src/components/Preloader.jsx)) displaying core agency values.
- **🖱️ Magnetic Custom Cursor**: A smooth coordinate tracker ([CustomCursor.jsx](src/components/CustomCursor.jsx)) that morphs and projects custom uppercase commands when hovering links or interactive canvases.
- **🎛️ Student Projects Playground**: A dedicated sandbox section inside [Services.jsx](src/components/Services.jsx) offering live, functional React states (Counter boundaries, Checklist add/toggle triggers, and Theme-toggling canvases) alongside semantic code guidelines.
- **📐 Fictional Case Studies Simulator**: Real-world mock viewports built into [Portfolio.jsx](src/components/Portfolio.jsx) enabling live booking flows, photo gallery category filters, and interior design sliders.
- **📈 Methodology Timeline**: An interactive step selector ([Process.jsx](src/components/Process.jsx)) displaying stages and phase deliverables.
- **💬 Dark-Mode Contact Portal**: A high-contrast [Contact.jsx](src/components/Contact.jsx) portal displaying customized underline input parameters, budget tier selectors, and instant submission simulation.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using PostCSS integration)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Compiler/Linter**: [Oxlint](https://oxc.rs/)

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Compile Production Bundle
```bash
npm run build
```

---

## 📂 Complete Project Structure

```
heritage-web-studio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CustomCursor.jsx    # Custom cursor coordinate tracking
│   │   ├── Preloader.jsx       # Introductory typography loader
│   │   ├── Navbar.jsx          # Scrollspy navigation bar
│   │   ├── Hero.jsx            # Asymmetrical editorial hero
│   │   ├── About.jsx           # Philosophy narrative & stats
│   │   ├── Services.jsx        # Service list & Student Playground
│   │   ├── Portfolio.jsx       # Simulated case studies viewports
│   │   ├── Process.jsx         # Vertical methodology steps
│   │   ├── FAQ.jsx             # Accordion list
│   │   ├── Contact.jsx         # Dark-themed custom inputs portal
│   │   └── Footer.jsx          # Navigation shortcuts & copyright
│   ├── App.css
│   ├── App.jsx                 # App controller
│   ├── index.css               # Tailwind imports & global animations
│   └── main.jsx
├── index.html
├── postcss.config.js           # Tailwind v4 configuration adapter
├── tailwind.config.js          # Core design guidelines rules
└── vite.config.js
```
