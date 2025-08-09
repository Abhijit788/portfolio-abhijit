# 🚀 Abhijit Arote - Portfolio Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/portfolio-website)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/portfolio-website)

A modern, interactive portfolio website featuring a unique "leaky-code" design aesthetic that embodies the essence of software development.

## 🌟 Live Demo

- **Production**: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)
- **GitHub**: [Repository](https://github.com/YOUR_USERNAME/portfolio-website)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [UI Components & Libraries](#ui-components--libraries)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Design Philosophy](#design-philosophy)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎨 Design & UI/UX
- **Leaky-Code Aesthetic**: Immersive coding environment with IDE windows, terminals, and syntax highlighting
- **Responsive Design**: Seamless experience across all devices and screen sizes
- **Dark Theme**: Professional dark color scheme optimized for developers
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Typography**: JetBrains Mono font for authentic coding experience
- **IDE-Style Components**: File explorers, debug panels, and terminal interfaces

### 🔧 Functionality
- **Smooth Scrolling Navigation**: Seamless section transitions with custom scroll behavior
- **Typewriter Effects**: Dynamic text animations for engaging content presentation
- **Interactive Terminal**: Functional command-line interface in contact section
- **Project Showcase**: Detailed project cards with live links and tech stacks
- **Blog Integration**: Technical articles with individual dynamic pages
- **Skills Carousel**: Animated showcase of technical skills and proficiencies
- **Contact Form**: Interactive terminal-style contact interface with command execution

### 🚀 Performance
- **Next.js App Router**: Latest routing system for optimal performance
- **Server Components**: Efficient rendering and reduced bundle size
- **Image Optimization**: Automatic image optimization with Next.js
- **Font Optimization**: Self-hosted fonts with display swap
- **Code Splitting**: Automatic code splitting for faster load times
- **Lazy Loading**: Components load on scroll for better performance

## 🛠 Tech Stack

### Frontend Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & Design
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **Custom CSS Variables** - Enhanced color palette and design tokens
- **CSS Grid & Flexbox** - Modern layout techniques

### UI Components & Libraries

#### Icon Library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
  - **Usage**: Navigation icons, status indicators, social media icons
  - **Icons Used**: 
    - Navigation: `FileText`, `Folder`, `Settings`, `Terminal`
    - UI Elements: `Menu`, `X`, `Play`, `Pause`, `RotateCcw`
    - Social: `Github`, `Linkedin`, `Instagram`, `MessageCircle`
    - System: `Cpu`, `Wifi`, `Battery`, `Monitor`
    - Content: `Download`, `ExternalLink`, `Calendar`, `MapPin`

#### Animation & Interactions
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
  - **Features**: Scroll-triggered animations, page transitions, micro-interactions
  - **Components**: `AnimateOnScroll`, smooth entrance animations
- **Custom CSS Animations** - Handcrafted animations for unique effects
  - **Typewriter Effect**: Custom implementation for text animations
  - **Skills Carousel**: Infinite scroll animation
  - **Hover Effects**: Gradient sweeps and transform animations
- **Intersection Observer API** - Scroll-triggered animations and lazy loading

#### Theme Management
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching capability
  - **Default**: Dark theme optimized for developers
  - **Support**: System preference detection

#### Typography
- **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)** - Developer-focused monospace font
  - **Implementation**: Next.js font optimization
  - **Weights**: 300, 400, 500, 600, 700
  - **Features**: Ligatures, coding-optimized character set

### Custom UI Components

#### Core Components
- **`EnhancedHeader`** - IDE-style navigation with system status bar
- **`EnhancedAbout`** - Hero section with terminal interface and tabbed content
- **`TypewriterText`** - Custom typewriter effect component
- **`AnimateOnScroll`** - Scroll-triggered animation wrapper
- **`ThemeToggle`** - Theme switching component

#### Section Components
- **`Skills`** - Interactive skills showcase with carousel
- **`Projects`** - Project portfolio with IDE-style cards
- **`Experience`** - Professional experience timeline
- **`Education`** - Academic background showcase
- **`Blog`** - Technical articles listing
- **`Contact`** - Interactive terminal contact form

#### UI Elements
- **IDE Windows** - Code editor styled containers
- **Terminal Interfaces** - Command-line styled components
- **Debug Panels** - Development tool inspired information displays
- **File Explorers** - File tree navigation components
- **Code Blocks** - Syntax highlighted code displays
- **Progress Bars** - Skill proficiency indicators
- **Status Indicators** - System status and availability displays

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[Prettier](https://prettier.io/)** - Code formatting and style consistency
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules

### Deployment & Hosting
- **[Vercel](https://vercel.com/)** - Deployment platform optimized for Next.js
- **[GitHub](https://github.com/)** - Source code repository and version control

## 📦 Dependencies

### Core Dependencies

\`\`\`json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.3.0",
  "tailwindcss": "^3.3.0",
  "framer-motion": "^10.16.0",
  "lucide-react": "^0.294.0",
  "next-themes": "^0.2.1",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
\`\`\`

### Development Dependencies

\`\`\`json
{
  "@types/node": "^20.0.0",
  "@types/react": "^18.0.0",
  "@types/react-dom": "^18.0.0",
  "@typescript-eslint/eslint-plugin": "^6.0.0",
  "@typescript-eslint/parser": "^6.0.0",
  "eslint": "^8.0.0",
  "eslint-config-next": "^14.0.0",
  "postcss": "^8.0.0",
  "tailwindcss-animate": "^1.0.7",
  "autoprefixer": "^10.0.0"
}
\`\`\`

### Font Dependencies

\`\`\`json
{
  "next/font/google": "JetBrains Mono - Monospace font optimized for coding"
}
\`\`\`

## 🚀 Installation

### Prerequisites
- **Node.js** 18.0 or later
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control

### Clone the Repository

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website
\`\`\`

### Install Dependencies

\`\`\`bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
\`\`\`

### Environment Setup

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Abhijit Arote - Portfolio"

# Analytics (Optional)
# NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

## 💻 Development

### Start Development Server

\`\`\`bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
\`\`\`

### Development Workflow

1. **Component Development**: Create components in \`app/components/\`
2. **Styling**: Use Tailwind CSS classes and custom CSS variables
3. **Type Safety**: Ensure all components have proper TypeScript interfaces
4. **Testing**: Test responsive design and animations
5. **Optimization**: Check performance with Lighthouse

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Connect to Vercel**: Import your repository in Vercel dashboard
3. **Auto Deploy**: Vercel will automatically deploy on every push

\`\`\`bash
# Using Vercel CLI
npm i -g vercel
vercel --prod
\`\`\`

### Deploy to Netlify

1. **Build Command**: \`npm run build\`
2. **Publish Directory**: \`out\` (if using static export) or \`.next\`
3. **Environment Variables**: Add any required environment variables

### Manual Deployment

\`\`\`bash
# Build the application
npm run build

# Start production server
npm run start
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio/
├── app/                          # Next.js App Router
│   ├── blog/                     # Blog pages
│   │   └── [slug]/              # Dynamic blog post pages
│   │       └── page.tsx         # Individual blog post
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable UI components
│   │   ├── AnimateOnScroll.tsx  # Scroll animation wrapper
│   │   ├── TypewriterText.tsx   # Typewriter effect component
│   │   ├── EnhancedHeader.tsx   # Navigation header
│   │   ├── EnhancedAbout.tsx    # Hero/About section
│   │   ├── Skills.tsx           # Skills showcase
│   │   ├── Projects.tsx         # Project portfolio
│   │   ├── Experience.tsx       # Work experience
│   │   ├── Education.tsx        # Educational background
│   │   ├── Blog.tsx             # Blog section
│   │   ├── Contact.tsx          # Contact form
│   │   ├── ThemeToggle.tsx      # Theme switcher
│   │   └── CodeBackground.tsx   # Animated background
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Home page
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   └── icons/                   # Icon files
├── styles/                      # Additional stylesheets
├── lib/                         # Utility functions
├── types/                       # TypeScript type definitions
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & scripts
├── .gitignore                   # Git ignore rules
├── LICENSE                      # MIT License
├── CONTRIBUTING.md              # Contribution guidelines
└── README.md                    # Project documentation
\`\`\`

## 🎨 Design Philosophy

### Leaky-Code Aesthetic
The portfolio embraces a "leaky-code" design philosophy where the boundary between the interface and the underlying code becomes intentionally blurred:

#### Visual Elements
- **IDE Windows**: Components styled as Visual Studio Code editor windows
- **Terminal Interfaces**: Interactive command-line experiences with real command execution
- **Syntax Highlighting**: Color-coded elements mimicking code syntax across the interface
- **File Explorer**: Navigation styled as a file tree with proper file extensions
- **Debug Panels**: Information displayed in debugging interface style
- **Console Logs**: Real-time system information in console format

#### Color Palette
- **Primary Background**: \`#0d1117\` (GitHub Dark theme)
- **Secondary Background**: \`#161b22\`
- **Tertiary Background**: \`#21262d\`
- **Border Colors**: \`#30363d\`, \`#484f58\`

#### Syntax Highlighting Colors
- **Keywords**: \`#ff7b72\` (Red-orange for language keywords)
- **Strings**: \`#a5d6ff\` (Light blue for string literals)
- **Functions**: \`#d2a8ff\` (Purple for function names)
- **Variables**: \`#79c0ff\` (Blue for variable names)
- **Numbers**: \`#79c0ff\` (Blue for numeric values)
- **Comments**: \`#8b949e\` (Gray for comments)
- **Operators**: \`#ff7b72\` (Red-orange for operators)

#### Interactive Elements
- **Hover Effects**: Gradient sweeps and subtle transformations
- **Click Feedback**: Button press animations and state changes
- **Loading States**: Progress bars and animated indicators
- **Scroll Animations**: Elements animate into view on scroll

## ⚡ Performance

### Core Web Vitals
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Time to Interactive (TTI)**: < 3.5s

### Optimization Techniques
- **Server-Side Rendering**: Next.js App Router with React Server Components
- **Image Optimization**: Next.js automatic image optimization and lazy loading
- **Font Optimization**: Self-hosted fonts with \`next/font\` and display swap
- **Code Splitting**: Automatic route-based and component-based code splitting
- **Tree Shaking**: Unused code elimination during build process
- **CSS Optimization**: Tailwind CSS purging and minification
- **Animation Performance**: Hardware-accelerated animations with Framer Motion
- **Bundle Analysis**: Regular bundle size monitoring and optimization

### Performance Monitoring
- **Lighthouse Scores**: Regular performance audits
- **Web Vitals**: Core Web Vitals monitoring
- **Bundle Analyzer**: Bundle size analysis and optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. **Code Style**: Follow the existing code style and ESLint configuration
2. **TypeScript**: Use TypeScript for all new components and maintain type safety
3. **Components**: Create reusable components following the established patterns
4. **Styling**: Use Tailwind CSS classes and maintain the leaky-code aesthetic
5. **Testing**: Test your changes across different devices and browsers
6. **Documentation**: Update documentation for any new features or changes

### Reporting Issues
Please use the GitHub issue tracker to report bugs or request features. Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and device information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhijit Arote**
- **Portfolio**: [abhijit.dev](https://your-portfolio.vercel.app)
- **GitHub**: [@Abhijit788](https://github.com/Abhijit788)
- **LinkedIn**: [Abhijit Arote](https://www.linkedin.com/in/abhijit-arote-aa9060246)
- **Instagram**: [@artistic_sneek](https://www.instagram.com/artistic_sneek/)
- **Email**: abhijitarote540@gmail.com

## 🙏 Acknowledgments

### Technologies & Libraries
- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Motion library for React
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[JetBrains](https://www.jetbrains.com/)** - JetBrains Mono font
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform

### Design Inspiration
- **GitHub Dark Theme** - Color palette and UI patterns
- **Visual Studio Code** - IDE interface design
- **Developer Tools** - Terminal and debugging interfaces

### Community
- **React Community** - For the amazing ecosystem
- **Next.js Team** - For the incredible framework
- **Tailwind CSS Team** - For the utility-first approach
- **Open Source Contributors** - For all the amazing libraries

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ and ☕ by Abhijit Arote

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/portfolio-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/portfolio-website?style=social)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/portfolio-website)
![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/portfolio-website)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fyour-portfolio.vercel.app)
\`\`\`
