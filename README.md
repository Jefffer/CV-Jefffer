# 🚀 Modern CV Portfolio

> A cutting-edge, digital CV built with React, featuring stunning animations, dark mode, and responsive design.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)]()

## ✨ Overview

This is a **fully customizable, open-source digital CV/portfolio** designed to showcase professional experience, skills, and projects with a modern, elegant aesthetic. Built with performance and user experience in mind, it features smooth scroll animations, 3D card effects, and a cohesive cyberpunk-minimalist design language.

**✅ Open Source** • Fork this repository and adapt it to your own professional profile!

---

## 🏗️ Architecture

### **Core Stack**
- **React 18** - Component-based UI with hooks architecture
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first styling with custom theme
- **Framer Motion** - Advanced animations and scroll effects
- **React Router** - Client-side routing for seamless navigation

### **Component Structure**
```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation with scroll detection
│   ├── About.jsx       # Personal introduction
│   ├── Skills.jsx      # Tech stack with 3D card animations
│   ├── Experience.jsx  # Timeline-based work history
│   ├── Projects.jsx    # Portfolio showcase
│   ├── Education.jsx   # Academic background
│   └── Contact.jsx     # Contact form with EmailJS
├── pages/              # Route-based pages
├── context/            # Global state (Theme, etc.)
├── styles/             # Custom CSS and animations
└── assets/             # Static resources
```

### **Key Features**
- 🎨 **Dark/Light Mode** with smooth transitions
- 🎭 **Scroll-based Animations** using Framer Motion
- 📱 **Fully Responsive** design (mobile-first approach)
- 🎯 **Performance Optimized** with lazy loading and code splitting
- 🌐 **Internationalization Ready** (English/Spanish support)
- 📧 **Contact Form** with EmailJS integration
- 🎬 **3D Card Effects** with perspective transforms
- ✨ **Cyberpunk Aesthetic** with neon accents and grid patterns

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ and npm/yarn/pnpm

### **Installation**
```bash
# Clone the repository
git clone https://github.com/Jefffer/CV-Jefffer.git

# Navigate to project directory
cd CV-Jefffer

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Build for Production**
```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 🎨 Customization Guide

This template is designed to be **easily customizable**. Here's how to make it your own:

### **1. Personal Information**
Update the following components with your data:
- `src/components/About.jsx` - Name, title, bio
- `src/components/Experience.jsx` - Work history
- `src/components/Skills.jsx` - Your tech stack
- `src/components/Projects.jsx` - Portfolio projects
- `src/components/Education.jsx` - Academic credentials

### **2. Theme & Colors**
Modify `tailwind.config.js` to adjust:
- Color palette (cyan, indigo, purple accents)
- Typography scale
- Spacing and breakpoints

### **3. Animations**
Fine-tune animations in individual components:
- Scroll triggers and thresholds
- Motion variants and transitions
- 3D transforms and perspective

### **4. Contact Integration**

#### **EmailJS Setup**
Configure EmailJS in `src/components/Contact.jsx`:
- Replace service ID, template ID, and public key
- Customize form fields and validation

#### **reCAPTCHA v3 Setup** 🔐
The contact form is protected by Google reCAPTCHA v3:

1. Get your reCAPTCHA keys from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin/create)
2. Create a `.env` file (copy from `.env.example`)
3. Add your Site Key:
   ```env
   VITE_RECAPTCHA_SITE_KEY=your_site_key_here
   ```
4. Restart the dev server

📖 **Detailed setup instructions:** See [RECAPTCHA_SETUP.md](RECAPTCHA_SETUP.md)

---

## 🛠️ Tech Highlights

| Technology | Purpose |
|------------|---------|
| **React Router** | SPA routing with lazy loading |
| **Framer Motion** | Scroll animations, 3D transforms, gestures |
| **Tailwind CSS** | Responsive design, dark mode, custom utilities |
| **React Icons** | Comprehensive icon library (FontAwesome, Simple Icons) |
| **EmailJS** | Serverless contact form handling |
| **reCAPTCHA v3** | Invisible spam protection for contact form |
| **Vite** | Fast HMR, optimized production builds |

---

## 📄 License

This project is **open source** and available under the [MIT License](LICENSE).

**Feel free to fork, customize, and use this template for your own portfolio!**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/Jefffer/CV-Jefffer/issues).

---

## 💡 Credits

Designed and developed by **Jefffer** with a focus on modern web standards and exceptional user experience.

**⭐ If you find this project useful, consider giving it a star!**
