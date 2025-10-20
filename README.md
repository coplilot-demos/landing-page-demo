# Modern Landing Page Demo

A modern, responsive landing page built with React and Vite, featuring a clean design and smooth user experience.

## 🚀 Features

- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Responsive Design**: Works beautifully on all devices and screen sizes
- **Modern UI**: Clean, contemporary design with smooth animations
- **Modular Architecture**: Component-based structure for easy maintenance and scalability
- **Dark Mode Support**: Automatic theme switching based on user preference
- **CI/CD Ready**: Automated deployment to GitHub Pages

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/coplilot-demos/landing-page-demo.git
cd landing-page-demo
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running Locally

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🔨 Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
landing-page-demo/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── public/                 # Static assets
│   └── vite.svg           # Favicon
├── src/
│   ├── App.css            # Main app styles
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
└── CONTRIBUTING.md       # Contribution guidelines
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers a new deployment.

The site will be available at: `https://coplilot-demos.github.io/landing-page-demo/`

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Deployed via [GitHub Pages](https://pages.github.com/)

## 📧 Support

If you have any questions or issues, please open an issue on GitHub.
