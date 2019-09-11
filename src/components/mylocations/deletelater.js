import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

class LocationEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      address: "",
      neighborhood: "",
      outlets: 0
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
      evt.preventDefault()
      const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.name,
        address: this.state.address,
        neighborhood: this.state.neighborhood,
        outlets: this.state.outlets,
        userId: currentUser.id
      };
      
      LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/mylocations"))
    }

    componentDidMount() {
      LocationManager.get(this.props.match.params.locationId)
      .then(location => {
          this.setState({
            name: location.name,
            address: location.address,
            neighborhood: location.neighborhood,
            outlets: location.outlets
          });
      });
    }

    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
      return (
        <>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Edit Article Modal"
        >
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="locationName">Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationName"
                value={this.state.name}
              />

              <label htmlFor="locationAddress">Address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationAddress"
                value={this.state.address}
              />
              <label htmlFor="locationNeighborhood">Neighborhood</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationNeighborhood"
                value={this.state.neighborhood}
              />
              <label htmlFor="locationOutlets">Outlets</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationOutlets"
                value={this.state.outlets}
              />
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </ReactModal>
            <h1 className="feature__name">Edit</h1>
            <button onClick={this.openModal}>Edit Location</button>
        </>
      );
    }
}

export default LocationEditForm