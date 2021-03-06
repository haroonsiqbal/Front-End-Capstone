import React, { Component } from 'react';
import CommentManager from "../../modules/CommentManager"
import CommentCard from "./CommentCard"
import { Button, Jumbotron, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './Comments.css'


class CommentModal extends Component {
    state = {
      comments: [],
      modalIsOpen: false,  
      comment: "",
    }

    updateComments = () => {
      const cardId = this.props.shop.locationId
      CommentManager.getLocationComments(cardId).then(comments => {
          console.log(comments)
          this.setState({comments: comments})
      })
  }

    componentDidMount() {
    this.updateComments()
}

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    deleteComment = id => {
        CommentManager.delete(id).then(() => {
          this.updateComments()
        });
      };

    constructNewComment = event => {
        const username = (JSON.parse(sessionStorage.getItem("credentials")))
        const name = username.username
        const newDate = new Date();
        const timestamp = newDate.toUTCString();
        if (this.state.comment === "") {
            window.alert("Please input a comment");
        } else {
            const comment = {
                comment: this.state.comment,
                userId: parseInt(username.id),
                name: name,
                timestamp: timestamp
            };

            CommentManager.post(comment)
                .then((commentObject) => {
                    console.log(commentObject)
                    document.querySelector("#comment").value = ""
                    this.setState({comment: ""})
                    const locationComment = {
                      locationId: this.props.shop.locationId,
                      commentId: commentObject.id
                    }
                    console.log(locationComment)
                    CommentManager.postLocationComment(locationComment)
                    this.updateComments()
                })


            }
        
      
    };
    render() {
        return (
            <div className="comments-container">
                <h1 className="feature__name h1_comments">Comments</h1>
            <hr></hr>
                <div className="comment-box">
                    {this.state.comments.map(comment =>
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            deleteComment={this.deleteComment}
                            {...this.props}
                        />
                    )}
                </div>
                <div className="comment-input-container">
                <Form>
                    <FormGroup>
                    <Input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="comment"
                        placeholder="Type a Comment..."
                    />
                <Button className="comment-submit-b" color="danger" size="sm" onClick={this.constructNewComment}>SUBMIT</Button>
                </FormGroup>
                </Form>
                </div>
            </div>
        )
    }
}

export default CommentModal;