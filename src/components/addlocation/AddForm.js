import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class AddForm extends Component {
    state = {
        name: "",
        address: "",
        neighborhood: "",
        outlets: 0
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewLocation = evt => {
        evt.preventDefault();
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))

        if (this.state.name === "" || this.state.address === "" || this.state.neighborhood === "" || this.state.outlets === "") {
            window.alert("Please fill out all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.name,
                address: this.state.address,
                neighborhood: this.state.neighborhood,
                outlets: parseInt(this.state.outlets),
                userId: currentUser.id
            };

            LocationManager.post(location)
            .then(() => this.props.history.push("/search"));
        }
    };

    render(){

        return(
            <React.Fragment>
            <h2>Add New Location</h2>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Name"
                        />
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="Address"
                        />
                       <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="neighborhood"
                        placeholder="Neighborhood"
                        />
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="outlets"
                        placeholder="Outlets"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </React.Fragment>
        )
    }
}

export default AddForm