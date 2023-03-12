import '../assets/style/navigation.css'

const Navigation = ({fakeLocation, setFakeLocation}) => {

  const handleClick = (location) => {
    setFakeLocation(location)
  }

  return (
    <nav>
      <a onClick={() => {handleClick('about')}} className={fakeLocation === 'about' ? 'active' : ''}>About Me</a>
      <a onClick={() => {handleClick('portfolio')}} className={fakeLocation === 'portfolio' ? 'active' : ''}>Portfolio</a>
      <a onClick={() => {handleClick('contact')}} className={fakeLocation === 'contact' ? 'active' : ''}>Contact</a>
      <a onClick={() => {handleClick('resume')}} className={fakeLocation === 'resume' ? 'active' : ''}>Resume</a>
    </nav>
  )
}

export default Navigation