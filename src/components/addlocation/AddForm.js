import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import { Button, Jumbotron, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
            <div className="search-form-container">
            <h2>Add New Location</h2>
            <Form>
                <FormGroup>
                        <Input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Name"
                        />
                </FormGroup>
                <FormGroup>
                        <Input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="Address"
                        />
                </FormGroup>
                <FormGroup>
                       <Input
                        type="select"
                        required
                        onChange={this.handleFieldChange}
                        id="neighborhood"
                        placeholder="Neighborhood"
                        >
                        <option>Neighborhood</option>
                        <option>Downtown</option>
                        <option>Germantown</option>
                        <option>East Nashville</option>
                        <option>Charlotte Pike</option>
                        <option>8th Avenue</option>
                        <option>12 South</option>
                        <option>The Gulch</option>
                        <option>West End</option>
                        <option>Hillsboro Village</option>
                        <option>Midtown</option>
                        <option>Wedgewood-Houston</option>
                        </Input>
                </FormGroup>
                <FormGroup>
                        <Input
                        type="select"
                        required
                        onChange={this.handleFieldChange}
                        id="outlets"
                        placeholder="Outlets"
                        >
                        <option>Outlets</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option> 
                        </Input>
                </FormGroup>    
                        <Button
                        color="danger"
                        type="button"
                        onClick={this.constructNewLocation}
                        >SUBMIT</Button>
            </Form>
        </div>
        )
    }
}

export default AddForm