<div align="center">

# 🚀 Personal Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

### Modern, Responsive, and Animated Portfolio Website

**[View Live Demo](https://eslamz11.vercel.app/)** • **[Report Bug](https://github.com/eslamz11/Portfolio-React.js/issues)** • **[Request Feature](https://github.com/eslamz11/Portfolio-React.js/issues)**

<img width="1892" height="1017" alt="hero" src="https://github.com/user-attachments/assets/45a69db2-1190-4eed-b4c6-f16d34c7b3e1" />
[Portfolio Preview](https://eslamz11.vercel.app/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Project Structure](#-project-structure)
- [Customization Guide](#-customization-guide)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

This is a modern, fully responsive personal portfolio website built with **React.js** and **Tailwind CSS**. The project showcases my skills, projects, and professional experience as a **Software Developer** specializing in **Flutter** and **Mobile App Development**.

The website features:
- ⚡ Lightning-fast performance with Vite
- 🎨 Beautiful animations powered by Framer Motion
- 📱 Fully responsive design for all devices
- ♿ Accessibility-focused implementation
- 🎭 Dark/Light mode support (if applicable)
- 🚀 Optimized for SEO

---

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX**: Clean, professional design with attention to detail
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **Responsive Layout**: Mobile-first approach ensuring perfect display on all screen sizes
- **Interactive Elements**: Engaging hover effects and micro-interactions

### 🔧 Technical Features
- **Component-Based Architecture**: Modular and reusable React components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Optimized Performance**: Code splitting and lazy loading for faster load times
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Cross-Browser Compatible**: Works seamlessly across modern browsers

### 📑 Sections
- **Hero Section**: Eye-catching introduction with animated elements
- **About Me**: Professional background and expertise
- **Skills**: Technical skills visualization with icons and proficiency levels
- **Projects**: Featured projects with detailed descriptions and live links
- **Experience**: Professional journey and work history
- **Contact**: Multiple ways to get in touch with integrated form

---

## 🛠 Tech Stack

### Core Technologies

| Technology | Description | Version |
|------------|-------------|---------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | JavaScript library for building user interfaces | 18.x |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Next-generation frontend tooling | 5.x |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Utility-first CSS framework | 3.x |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Production-ready animation library | Latest |

### Additional Tools & Libraries
- **React Router DOM**: For seamless navigation
- **React Icons**: Comprehensive icon library
- **EmailJS / FormSubmit**: Contact form functionality
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for version control)

You can check your versions by running:

```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/eslamz11/Portfolio-React.js.git
cd Portfolio-React.js
```

2. **Install dependencies**

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The application will open at `http://localhost:5173` (default Vite port)

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio-React.js/
├── public/                 # Static files
│   ├── assets/            # Images, icons, and media files
│   └── favicon.ico        # Website favicon
├── src/
│   ├── components/        # Reusable React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Footer.jsx
│   ├── assets/           # Source assets (if any)
│   ├── data/             # Static data files
│   │   └── projectsData.js
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Global styles
│   │   └── index.css
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Application entry point
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore file
├── index.html            # HTML template
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## 🎨 Customization Guide

### Updating Personal Information

1. **Profile Data**: Edit `src/data/profileData.js` with your information
2. **Projects**: Update `src/data/projectsData.js` with your projects
3. **Skills**: Modify `src/data/skillsData.js` to reflect your skillset
4. **Images**: Replace images in `public/assets/` with your own

### Changing Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6B8E23',    // Your primary color
        secondary: '#0F1A14',  // Your secondary color
        // Add more custom colors
      }
    }
  }
}
```

### Modifying Animations

Animations are configured in individual components using Framer Motion. Example:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

---

## ⚡ Performance

This portfolio is optimized for maximum performance:

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with lazy loading

### Performance Best Practices Implemented
- ✅ Code splitting and lazy loading
- ✅ Image optimization and lazy loading
- ✅ Minified CSS and JavaScript
- ✅ Efficient caching strategies
- ✅ Minimal third-party dependencies

---

## 🌐 Browser Support

This website supports all modern browsers:

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Opera | Last 2 versions |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use this project as a template for your own portfolio. If you do, I'd appreciate attribution by linking back to this repository.

---

## 📬 Contact

**Eslam Mohamed Zayed** - Software Developer & Flutter Specialist

- 📧 Email: [e.zayed1947@su.edu.eg](mailto:e.zayed1947@su.edu.eg)
- 📱 Phone: +20 109 313 0120
- 💼 LinkedIn: [Eslam Zayed](https://www.linkedin.com/in/eslamz11)
- 🐙 GitHub: [@eslamz11](https://github.com/eslamz11)
- 🌐 Portfolio: [eslamz11](https://eslamz11.vercel.app/)

---

## 🙏 Acknowledgments

Special thanks to:

- [React.js](https://reactjs.org/) - The amazing library that powers this site
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For beautiful animations
- [Vite](https://vitejs.dev/) - For the lightning-fast build tool
- [React Icons](https://react-icons.github.io/react-icons/) - For the comprehensive icon library

---

<div align="center">

### ⭐ If you found this project helpful, please consider giving it a star!

**Made with ❤️ by [Eslam Mohamed Zayed](https://github.com/eslamz11)**

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0F1A14&height=100&section=footer)

</div>
