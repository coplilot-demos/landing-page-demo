import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      
      <main className="main">
  <Hero />
  <About />

        <Features />
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
