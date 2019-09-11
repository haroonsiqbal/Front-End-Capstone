import React, { Component } from "react"
import LocationManager from '../../modules/LocationManager'

class EditLocationModal extends Component {

    state = {
      locationName: "",
      locationAddress: "",
      locationNeighborhood: "",
      locationOutlets: 0,
      id: 0

    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    updateExistingLocation = evt => {
        evt.preventDefault()
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
        this.setState({ loadingStatus: true });
        const editedLocation = {
          id: parseInt(this.state.id),
          name: this.state.locationName,
          address: this.state.locationAddress,
          neighborhood: this.state.locationNeighborhood,
          outlets: this.state.locationOutlets,
          userId: currentUser.id
        };
        
        LocationManager.update(editedLocation)
        .then(() => {
          this.props.closeModal()
          this.props.getAllLocations()
        })
      }
  
      componentDidMount() {
        LocationManager.get(this.props.shop.id)
        .then(location => {
            this.setState({
              locationName: location.name,
              locationAddress: location.address,
              locationNeighborhood: location.neighborhood,
              locationOutlets: location.outlets,
              id: location.id
            });
        });
      }

    render() {
        return (
            <>
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
                value={this.state.locationName}
              />

              <label htmlFor="locationAddress">Address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationAddress"
                value={this.state.locationAddress}
              />
              <label htmlFor="locationNeighborhood">Neighborhood</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationNeighborhood"
                value={this.state.locationNeighborhood}
              />
              <label htmlFor="locationOutlets">Outlets</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationOutlets"
                value={this.state.locationOutlets}
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
            </>
        )
    }
}

export default EditLocationModal