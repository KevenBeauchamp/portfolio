import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Projects from './components/Project'
// import Skills from './components/Skill'
// import About from './components/About'
// import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        {/* <Projects />
        <Skills />
        <About />
        <Contact /> */}
      </div>
    </>
  )
}

export default App
