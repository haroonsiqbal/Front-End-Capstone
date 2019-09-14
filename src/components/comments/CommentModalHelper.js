import React, { Component } from "react"
import ReactModal from 'react-modal'
import CommentModal from "./CommentModal";

ReactModal.setAppElement('#root')
class CommentModalHelper extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <>
            <ReactModal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Comment Modal"
            >
                <CommentModal
                    closeModal={this.closeModal}
                    openModal={this.openModal}
                    updateComments={this.updateComments}
                    {...this.props}
                />
    
    
        </ReactModal>
        <button onClick={this.openModal}>Comments</button>

            </>
        )
    }
}

export default CommentModalHelper