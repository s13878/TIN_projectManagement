import React from 'react'
import CommentDetails from './CommentDetails'
import CreateComment from './CreateComment'

const CommentList = ({comments, id}) => {
  console.log(comments);
  return (
    <div className="container white">
      <div className="comment-list section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              <img src="/img/mario.png" width="30px"/> Comments
          </span>
        </div>
      </div>
        { comments && comments.map(comment => {
          console.log(comment);
          return (
                <CommentDetails comment={comment} key={comment.id}/>
          )
        })}
        <CreateComment id={ id } />
      </div>
    </div>

  )
}

export default CommentList