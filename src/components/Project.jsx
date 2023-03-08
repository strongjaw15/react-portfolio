import asteroidsImage from '../assets/images/asteroids.png'
import socialNetworkApiImage from '../assets/images/social-network-api.png'
import teamProfileGeneratorImage from '../assets/images/team-profile-generator.png'
import theBarstoolImage from '../assets/images/the-barstool.png'
import timedQuizImage from '../assets/images/timed-quiz.png'
import weatherAppImage from '../assets/images/weather-app.png'

// import '../assets/style/project.css'
  
const Project = (props) => {
  
  const project = props.propsObject.project
    
  return (
    <div className='project'
    //  style={{
    //   backgroundImage: `url(${
    //     (project.pictureName === 'asteroids') ? asteroidsImage :
    //     (project.pictureName === 'social-network-api') ? socialNetworkApiImage :
    //     (project.pictureName === 'team-profile-generator') ? teamProfileGeneratorImage :
    //     (project.pictureName === 'the-barstool') ? theBarstoolImage :
    //     (project.pictureName === 'timed-quiz') ? timedQuizImage : weatherAppImage
    //   })`
    // }}
    >
      <div className='container'>
      <a href={project.github}><h3>{project.name}</h3></a>
      </div>
      <div className='polaroid'>
        <img src={(project.pictureName === 'asteroids') ? asteroidsImage :
        (project.pictureName === 'social-network-api') ? socialNetworkApiImage :
        (project.pictureName === 'team-profile-generator') ? teamProfileGeneratorImage :
        (project.pictureName === 'the-barstool') ? theBarstoolImage :
        (project.pictureName === 'timed-quiz') ? timedQuizImage : weatherAppImage} alt={project.alt} />
      </div>
      <div className='container'>
        <p>{project.description}</p>
        {project.url ? (<a href={project.url}>Deployed Site</a>) : ''}
        {project.video ? (<a href={project.video}>Video</a>) : ''}
      </div>
    </div>
  )
}

export default Project