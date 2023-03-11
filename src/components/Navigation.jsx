import {useLocation} from 'react-router-dom'

import '../assets/style/navigation.css'

const Navigation = () => {

  // const location = useLocation()
  const location = window.location.href

  return (
    <nav>
      {/* <a href="/" className={location.pathname === '/' ? 'active' : ''}>Home</a> */}
      <a href="/" className={location === '/' ? 'active' : ''}>About Me</a>
      <a href="/portfolio" className={location === '/portfolio' ? 'active' : ''}>Portfolio</a>
      <a href="/contact" className={location === '/contact' ? 'active' : ''}>Contact</a>
      <a href="/resume" className={location === '/resume' ? 'active' : ''}>Resume</a>
    </nav>
  )
}

export default Navigation