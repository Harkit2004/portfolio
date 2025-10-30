import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  // Get initial page from localStorage or default to 'about'
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem('activePage') || 'about'
  })

  // Save active page to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activePage', activePage)
  }, [activePage])

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'project'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  )
}

export default App
