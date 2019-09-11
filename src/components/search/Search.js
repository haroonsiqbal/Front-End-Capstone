import React, { Component } from "react"
import Nav from "../nav/Nav"
import SearchList from "./SearchList";
import SearchForm from "./SearchForm";
import LocationManager from '../../modules/LocationManager'

class Search extends Component {

    //set state of locations to display in search list

    state = {
        locations: []
    }

    //create a function to pass down to SearchForm to update the state
    getSearchResults = (neighborhood, outlets) => {
        LocationManager.getFiltered(neighborhood, outlets).then((locations) => {this.setState({locations: locations})})
    }
    


    render() {
        return(
            <React.Fragment>
                <Nav />
                <SearchForm
                    getSearchResults={this.getSearchResults}
                    {...this.props} />
                <SearchList
                    locations = {this.state.locations}
                    {...this.props} />
            </React.Fragment>
        )
    }
}

export default Search