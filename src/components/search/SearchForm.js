import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

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

            this.props.getSearchResults(neighborhood, outlets)
        }
    };

    render(){

        return(
            <React.Fragment>
            <h2>Search</h2>
            <form>
                <fieldset>
                    <div className="formgrid">
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
                        placeholder="Minimum Outlets"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        onClick={this.searchNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </React.Fragment>
        )
    }
}

export default SearchForm