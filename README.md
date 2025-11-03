# Emmanuel Obukevwo - Developer Portfolio

A modern, GitHub-inspired portfolio website built with Next.js and Tailwind CSS.

## 🚀 Features

- **GitHub-inspired Design**: Clean, professional UI following GitHub's design principles
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Deployment Ready**: Configured for Vercel, Netlify, and GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS with custom GitHub color palette
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Animations**: CSS transitions and Tailwind animations
- **Deployment**: Vercel (recommended), Netlify, or GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/karoobuks/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Update `next.config.js` with your repository name
2. Run: `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 📁 Project Structure

```
├── components/          # React components
│   ├── Layout.js       # Main layout wrapper
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   └── ProjectCard.js  # Project card component
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper with theme provider
│   ├── index.js       # Homepage
│   ├── about.js       # About page
│   ├── projects.js    # Projects page
│   └── contact.js     # Contact page
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS and custom styles
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js` using GitHub's design tokens. You can customize:
- Accent colors
- Background colors
- Border colors
- Text colors

### Content
Update the following files with your information:
- `pages/index.js` - Hero section and skills
- `pages/about.js` - Personal information and experience
- `pages/projects.js` - Your projects and repositories
- `pages/contact.js` - Contact information

### Theme
The theme system supports:
- Light mode
- Dark mode
- System preference detection
- Smooth transitions between themes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimized with tree shaking and code splitting
- **Images**: Optimized with Next.js Image component

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/karoobuks/portfolio/issues).

## 📞 Contact

Emmanuel Obukevwo - [manuelobukevwo@gmail.com](mailto:manuelobukevwo@gmail.com)

Project Link: [https://github.com/karoobuks/portfolio](https://github.com/karoobuks/portfolio)

---

⭐ Star this repository if you found it helpful!