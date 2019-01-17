import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, eaque laborum suscipit porro tempore vel non harum eveniet reprehenderit quos commodi nulla ducimus labore rerum facere ipsam, quasi mollitia laboriosam!</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by The Omnioni</div>
            <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
