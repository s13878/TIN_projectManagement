import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../store/actions/commentActions'

class CreateComment extends Component {
    state = {
        text: '',
        projectId: this.props.id
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.setState({
            text: ''
        })
        this.props.createComment(this.state);

        // this.props.history.push('/');
    }


  render() {
    return (
      
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add Comment</h5>
            <div className="input-field">
                <label htmlFor="text">Comment</label>
                <textarea id="text" className="materialize-textarea" onChange={this.handleChange} value={this.state.text}></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Add</button>
            </div>
        </form>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        
      }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)
