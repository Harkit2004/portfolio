interface NavbarProps {
  activePage: string
  setActivePage: (page: string) => void
}

const Navbar = ({ activePage, setActivePage }: NavbarProps) => {
  const handleNavClick = (page: string) => {
    setActivePage(page)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`}
            onClick={() => handleNavClick('resume')}
          >
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'project' ? 'active' : ''}`}
            onClick={() => handleNavClick('project')}
          >
            Project
          </button>
        </li>

        <li className="navbar-item">
          <button 
            className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
