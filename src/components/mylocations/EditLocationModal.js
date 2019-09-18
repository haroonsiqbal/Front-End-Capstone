import React, { Component } from "react"
import LocationManager from '../../modules/LocationManager'
import { Button, Jumbotron, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './EditLocation.css'

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
          this.props.getFiltered()
        })
      }
  
      componentDidMount() {
        LocationManager.get(this.props.shop.location.id)
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
            <div className="edit-location-container">
            <h1>Edit Location</h1><hr></hr>
                <Form>
          <FormGroup>
              <label htmlFor="locationName">Name</label>
              <Input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationName"
                value={this.state.locationName}
              />
          </FormGroup>
          <FormGroup>
              <label htmlFor="locationAddress">Address</label>
              <Input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationAddress"
                value={this.state.locationAddress}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="locationNeighborhood">Neighborhood</label>
              <Input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationNeighborhood"
                value={this.state.locationNeighborhood}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="locationOutlets">Outlets</label>
              <Input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationOutlets"
                value={this.state.locationOutlets}
              />
            </FormGroup>
              <Button
                color="danger"
                size="sm"
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >UPDATE</Button>
        </Form>
            </div>
        )
    }
}

export default EditLocationModal