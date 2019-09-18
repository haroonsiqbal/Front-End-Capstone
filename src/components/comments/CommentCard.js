import React, { Component } from 'react';
import EditCommentModalHelper from './EditCommentModalHelper'

class CommentCard extends Component {
  
  render() {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
    if (this.props.comment.comment.userId === currentUser.id) {
      return (
        <div className="comment-card-user">
          <p className="comment-message">{this.props.comment.comment.comment}</p>
          <p className="comment-byline">Submitted by {this.props.comment.comment.name} on {this.props.comment.comment.timestamp}</p>
          <EditCommentModalHelper {...this.props} />
          <button className="card-button-comments" onClick={() => this.props.deleteComment(this.props.comment.comment.id)}>DELETE</button>
        </div>
      );
    } else {
      return <>
        <div className="comment-card">
          <div className="card-content">
            <p className="comment-message">{this.props.comment.comment.comment}</p>
            <p className="comment-byline">Submitted by {this.props.comment.comment.name} on {this.props.comment.comment.timestamp}</p>
          </div>
        </div></>
    }
  }
}

export default CommentCard;