import {Project} from '../components'
import projects from '../assets/projects/projects'

import '../assets/style/portfolio-page.css'

const PortfolioPage = () => {
  return (
    <section className="portfolio-page">
      <h2>My Work</h2>
      <div className='projects'>
        {projects.map(project => (<div key={project.name} className="project-container"><Project propsObject = {{project}} /></div>))}
      </div>
    </section>
  )
}

export default PortfolioPage