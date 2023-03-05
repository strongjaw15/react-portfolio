const Project = (props) => {
  const project = props.propsObject
  return (
    <div>
      <a href={project.github}><h3>{project.name}</h3></a>
      <p>{project.description}</p>
      {project.url ? (<a href={project.url}>Deployed Site</a>) : ''}
      {project.video ? (<a href={project.video}>Video</a>) : ''}
    </div>
  )
}

export default Project