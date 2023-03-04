import profileImg from '../assets/images/profile-image.png'

const HomePage = () => {
  return (
    <section className='homepage'>
      <div>
        <img src={profileImg} alt='A frosty young man.'></img>
      </div>
      <div>
        <p>Life takes many turns</p>
        <p>As a winding river flows</p>
        <p>Ships born to the sea</p>
      </div>
    </section>
  )
}

export default HomePage