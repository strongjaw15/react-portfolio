import {Project} from '../components'
import projects from '../assets/projects/projects'

const PortfolioPage = () => {
  return (
    <section className="portfolio-page">
      <h2>My Work</h2>
        {projects.map(project => (<div key={project.name} className="project-container"><Project propsObject = {{project}} /></div>))}
    </section>
  )
}

export default PortfolioPage