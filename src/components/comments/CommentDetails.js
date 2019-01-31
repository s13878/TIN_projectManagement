import React from 'react'
import moment from 'moment'

const CommentDetails = ({comment}) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{comment.authorFirstName} {comment.authorLastName}</span>
        <p className="grey-text">{moment(comment.createdAt.toDate()).calendar()}</p>
        <p>{comment.text}</p>
      </div>
    </div>
  )
}

export default CommentDetails