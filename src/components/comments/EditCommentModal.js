import React, { Component } from "react"
import CommentManager from '../../modules/CommentManager'
import { Button, Jumbotron, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './Comments.css'

class EditCommentModal extends Component {

    state = {
      commentMessage: "",
      id: 0,
      userId: 0,
      name: "",
      timestamp: "",
      comments: []
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    updateExistingComment = evt => {
        const newDate = new Date();
        const timestampEdit = newDate.toUTCString();  
      evt.preventDefault()
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
        this.setState({ loadingStatus: true });
        const editedComment = {
          id: parseInt(this.state.id),
          comment: this.state.commentMessage,
          userId: this.state.userId,
          name: this.state.name,
          timestamp: timestampEdit
        };
        console.log(editedComment)
        
        CommentManager.update(editedComment)
        .then(() => {
          this.props.closeModal()
          this.props.openModal()
        })
      }
  
      componentDidMount() {
        CommentManager.get(this.props.comment.comment.id)
        .then(comment => {
            this.setState({
              commentMessage: comment.comment,
              id: comment.id,
              userId: comment.userId,
              name: comment.name,
              timestamp: comment.timestamp 

            });
        });
      }

    render() {
        return (
            <div className="edit-comments-container">
        <h1>Edit Comment</h1><hr></hr>
        <Form>
          <FormGroup>
              <label htmlFor="commentMessage">Comment</label>
              <Input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="commentMessage"
                value={this.state.commentMessage}
              />
            </FormGroup>
              <Button
                color="danger"
                type="button" disabled={this.state.loadingStatus}
                size="sm"
                onClick={this.updateExistingComment}
                className="btn btn-primary"
              >UPDATE</Button>
        </Form>
            </div>
        )
    }
}

export default EditCommentModal