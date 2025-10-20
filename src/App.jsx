import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Modern Landing Page</h1>
          <p className="tagline">Built with React & Vite</p>
        </div>
      </header>
      
      <main className="main">
        <section className="hero">
          <div className="container">
            <h2>Welcome to Your Landing Page</h2>
            <p className="hero-description">
              A modern, responsive landing page built with React, Vite, and deployed via GitHub Pages.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
                Click me ({count})
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h3>Features</h3>
            <div className="feature-grid">
              <div className="feature-card">
                <h4>🚀 Fast</h4>
                <p>Lightning-fast performance with Vite's modern build tooling</p>
              </div>
              <div className="feature-card">
                <h4>📱 Responsive</h4>
                <p>Works beautifully on all devices and screen sizes</p>
              </div>
              <div className="feature-card">
                <h4>🎨 Modern</h4>
                <p>Clean, modern design with smooth animations</p>
              </div>
              <div className="feature-card">
                <h4>🔧 Modular</h4>
                <p>Component-based architecture for easy maintenance</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Modern Landing Page. Built with ❤️ using React & Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
