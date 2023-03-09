import '../assets/style/header.css'

const Header = ({children}) => {
  return (
    <header>
      <h1>Corin S. Wenger</h1>
      {children}
    </header>
  )
}

export default Header