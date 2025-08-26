# 🚀 Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies. This portfolio showcases my projects, skills, and experience with smooth animations and an elegant design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-06B6D4)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist interface with dark/light mode support
- 🚀 **Smooth Animations** - Powered by Framer Motion and GSAP for fluid interactions
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Interactive Elements** - Engaging hover effects and micro-interactions
- 🌐 **3D Globe** - Interactive globe visualization using Cobe
- 💼 **Project Showcase** - Detailed project cards with live demos and GitHub links
- 📊 **Skills Section** - Dynamic skill visualization with progress indicators
- 📧 **Contact Form** - Functional contact form integration
- 🔧 **Component Library** - Built with Radix UI and shadcn/ui components

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Next-generation frontend tooling

### Styling & UI
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI primitives
- **shadcn/ui** - Beautiful and accessible component library
- **Lucide React** - Beautiful & consistent icon toolkit

### Animations
- **Framer Motion** - Production-ready motion library for React
- **GSAP** - Professional-grade animation library
- **Magic UI** - Collection of animated components

### Additional Libraries
- **Cobe** - Interactive 3D globe visualization
- **Class Variance Authority** - For building type-safe component APIs
- **clsx & tailwind-merge** - Utility libraries for conditional classes



## 📂 Project Structure

```
src/
├── components/
│   ├── portfolio/          # Main portfolio sections
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # About me section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Projects.tsx    # Project gallery
│   │   ├── Contact.tsx     # Contact form
│   │   └── footer.tsx      # Footer component
│   ├── portfolio/common/   # Shared portfolio components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Loader.tsx      # Loading spinner
│   │   ├── MiniStat.tsx    # Statistics component
│   │   └── SocialIcon.tsx  # Social media icons
│   ├── magicui/           # Animated UI components
│   │   ├── globe.tsx       # 3D globe component
│   │   ├── icon-cloud.tsx  # Icon cloud animation
│   │   └── terminal.tsx    # Terminal animation
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── lib/                   # Utility functions and data
│   ├── data.ts           # Portfolio data
│   ├── types.ts          # TypeScript definitions
│   ├── utils.ts          # Helper functions
│   └── animations.ts     # Animation configurations
├── assets/               # Static assets
└── styles/              # Global styles
```

### Adding New Projects

Edit `src/lib/data.ts` to add new projects:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    icon: <YourIcon className="h-6 w-6" />,
    tags: ["React", "TypeScript", "Tailwind"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    status: "Live",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-project.com",
  },
];
```

### Customizing Theme

The project uses CSS variables for theming. Modify `src/index.css` to customize colors:

```css
:root {
  --primary: your-color;
  --background: your-background;
  /* Add more custom properties */
}
```

### Adding New Sections

1. Create a new component in `src/components/portfolio/`
2. Import and add it to your main App component
3. Update navigation if needed

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This portfolio is configured for easy deployment to GitHub Pages:

1. **Update homepage in package.json**
   ```json
   "homepage": "https://yourusername.github.io/portfolio/"
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Gyanranjan Priyam**
- GitHub: [@Gyanranjan-Priyam](https://github.com/Gyanranjan-Priyam)
- Portfolio: [Live Demo](https://gyanranjanpriyam.netlify.app)


⭐ Star this repository if you found it helpful!
