import profileImg from '../assets/images/profile-image.png'

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className='profile-picture-container'>
        <img src={profileImg} alt='A frosty young man.' className='profile-picture'></img>
      </div>
      <div>
        <h2>About Me</h2>
        <p>Hi! My name is Corin Wenger, and this is my website. I am a full stack web developer with a certificate in such from the Univeristy of Minnesota. I also have a BS degree in Maritime Technology from Northwestern Michigan College and an AA degree from Rainy River Community College.</p>
        <p>I have five years of experience in engine room management in the U.S. Merchant Marines, and I'm excited about switching careers to web development, taking along the skills I've gained in technical troubleshooting, creative problem solving, and systems management. I thrived in the coding bootcamp at UMN where I got my certificate, and I'm looking forward to applying my coding skills in a professional environment.</p>
        <p>I live in Northern Minnesota with my family, I like skiing, hiking, being outdoors, reading, playing games, and building LEGO. I dream of hiking the Appalachian Trail and riding bicycle across North America.</p>
        {/* <p>I live in Northern Minnesota with my wife and son. I dream of hiking the Appalachian Trail. My hobbies include reading books, playing games, and building LEGO.</p>
        <p>I have an Associate of Arts degree from Rainy River Community College, a Bachelor of Science Degree in Maritime Technology - Engineering Officer from Northwestern Michigan College, and a Web Development Certificate from the University of Minnesota. I worked for five years as an Engineering Officer in the U.S. Merchant Marines before going back to school for programming.</p>
        <p>As a burgeoning full-stack web developer, I'm excited. I'm excited that I just spent the last three months learning to write code. I'm excited about the projects I've made. I'm excited about the apps I'm going to build. I'm excited about the people I'm going to meet. I'm excited about the skills I will hone to excellency. I'm excited! From basic HTML/CSS/JS front-end sites to MERN applications, I've enjoyed a taste of web development, and I ready for more.</p> */}
      </div>
    </section>
  )
}

export default AboutPage