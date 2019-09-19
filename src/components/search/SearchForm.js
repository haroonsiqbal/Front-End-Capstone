import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import { Button, Jumbotron, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './Search.css'


class SearchForm extends Component {
    state = {
        neighborhood: "",
        outlets: 0
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    searchNewLocation = evt => {
        evt.preventDefault();
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))

        if (this.state.neighborhood === "" || this.state.outlets === "") {
            window.alert("Please fill out all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const neighborhood = this.state.neighborhood
            const outlets = parseInt(this.state.outlets)
            console.log(outlets)

            this.props.getSearchResults(neighborhood, outlets)
        }
    };

    render(){
        return(
        <div className="search-form-container">
            <h2>Search</h2>
            <Form>
                <FormGroup>
                       <Label for="neighborhood">Neighborhood</Label>
                       <Input
                        type="select"
                        required
                        onChange={this.handleFieldChange}
                        id="neighborhood"
                        placeholder="Neighborhood">
                        <option>Downtown</option>
                        <option>Germantown</option>
                        <option>East Nashville</option>
                        <option>Charlotte Pike</option>
                        <option>8th Avenue</option>
                        <option>12 South</option>
                        <option>The Gulch</option>
                        <option>West End</option>
                        <option>Hillsboro Village</option>
                        <option>Mid-Town</option>
                        <option>Wedgewood-Houston</option>
                        </Input>
                </FormGroup>
                <FormGroup>      
                        <Input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="outlets"
                        placeholder="Minimum Outlets"
                        />
                </FormGroup>        
                        <Button
                        color="danger"
                        type="button"
                        onClick={this.searchNewLocation}
                        >SUBMIT</Button>
            </Form>
        </div>
        )
    }
}

export default SearchForm