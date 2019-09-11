import React, { Component } from "react"
import ReactModal from 'react-modal'
import EditLocationModal from "./EditLocationModal";

ReactModal.setAppElement('#root')
class EditModalHelper extends Component {
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
                contentLabel="Location Modal"
            >
                <EditLocationModal
                    closeModal={this.closeModal}
                    openModal={this.openModal}
                    {...this.props}
                />
    
    
        </ReactModal>
        <button onClick={this.openModal}>Edit</button>

            </>
        )
    }
}

export default EditModalHelper