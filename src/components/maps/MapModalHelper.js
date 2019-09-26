import React, { Component } from "react"
import ReactModal from 'react-modal'
import MapModal from "./MapModal";

ReactModal.setAppElement('#root')
class MapModalHelper extends Component {
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
                contentLabel="Map Modal"
            >
                <MapModal
                    closeModal={this.closeModal}
                    openModal={this.openModal}
                    {...this.props}
                />
    
    
        </ReactModal>
        <button className="card-button" onClick={this.openModal}>MAP</button>

            </>
        )
    }
}

export default MapModalHelper