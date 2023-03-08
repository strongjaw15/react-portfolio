import {useLocation} from 'react-router-dom'

const Navigation = () => {

  const location = useLocation()

  return (
    <nav>
      {/* <a href="/" className={location.pathname === '/' ? 'active' : ''}>Home</a> */}
      <a href="/" className={location.pathname === '/' ? 'active' : ''}>About Me</a>
      <a href="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</a>
      <a href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</a>
      <a href="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</a>
    </nav>
  )
}

export default Navigation