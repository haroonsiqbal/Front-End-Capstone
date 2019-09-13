import React, { Component } from 'react';

class CommentCard extends Component {
  
  render() {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
    if (this.props.comment.userId === currentUser.id) {
      return (
        <div className="card">
          <p>comment</p>
          <button>edit</button>
          <button>delete</button>
        </div>
      );
    } else {
      return <>
        <div className="card">
          <div className="card-content">
            <p>comment</p>
            
          </div>
        </div></>
    }
  }
}

export default CommentCard;