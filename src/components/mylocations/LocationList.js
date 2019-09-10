import React, { Component } from "react"
import Nav from "../nav/Nav"

class LocationList extends Component {
    render() {
        return(
            <React.Fragment>
                <Nav />
                <h2>My Locations</h2>
            </React.Fragment>
        )
    }
}

export default LocationList