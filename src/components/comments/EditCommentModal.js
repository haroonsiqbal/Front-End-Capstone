import React, { Component } from "react"
import CommentManager from '../../modules/CommentManager'

class EditCommentModal extends Component {

    state = {
      commentMessage: "",
      id: 0,
      userId: 0,
      comments: []
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    updateExistingComment = evt => {
        evt.preventDefault()
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
        this.setState({ loadingStatus: true });
        const editedComment = {
          id: parseInt(this.state.id),
          comment: this.state.commentMessage,
          userId: this.state.userId
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
              userId: comment.userId

            });
        });
      }

    render() {
        return (
            <>
                <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="commentMessage">Comment</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="commentMessage"
                value={this.state.commentMessage}
              />
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingComment}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
            </>
        )
    }
}

export default EditCommentModal