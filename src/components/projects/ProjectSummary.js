import React from 'react'

const ProjectSummary = ({project, key}) => {
  return (
    <div className="card z-depth-0 project-sumary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Postet by the Omnioni</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary