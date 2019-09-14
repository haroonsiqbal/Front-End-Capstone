import React, { Component } from 'react';

class CommentCard extends Component {
  
  render() {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
    if (this.props.comment.comment.userId === currentUser.id) {
      return (
        <div className="card">
          <p>{this.props.comment.comment.comment}</p>
          <button>edit</button>
          <button>delete</button>
        </div>
      );
    } else {
      return <>
        <div className="card">
          <div className="card-content">
            <p>{this.props.comment.comment.comment}</p>
            
          </div>
        </div></>
    }
  }
}

export default CommentCard;