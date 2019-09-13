import React, { Component } from 'react';
import CommentManager from "../../modules/CommentManager"
import CommentCard from "./CommentModalHelper"


class AddCommentModal extends Component {
    state = {
      comments: [],
      modalIsOpen: false,  
      comment: "",
    }

    updateComments = () => {
      CommentManager.getAll().then(messages => {
          this.setState({messages: messages})
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


    constructNewComment = event => {
        const username = (JSON.parse(sessionStorage.getItem("credentials")))
        if (this.state.comment === "") {
            window.alert("Please input a message");
        } else {
            const comment = {
                comment: this.state.comment,
                userId: parseInt(username.id)
            };

            CommentManager.post(comment)
                .then(() => {
                    console.log("post")
                    this.updateComments()
                    document.querySelector("#comment").value = ""
                    this.setState({comment: ""})
                })
        }
    };
    render() {
        return (
            <>
                <h1 className="feature__name h1_comments">Comments</h1>
            <hr></hr>
                <div className="commentContainer">
                    {this.state.comments.map(comment =>
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            updateComments={this.updateComments}
                            {...this.props}
                        />
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="comment"
                        placeholder="Type a Comment"
                    />
                </div>
                <button onClick={this.constructNewComment}>Submit</button>
            </>
        )
    }
}

export default AddCommentModal;