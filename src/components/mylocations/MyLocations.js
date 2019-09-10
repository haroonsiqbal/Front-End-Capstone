import React, { Component } from "react"
import Nav from "../nav/Nav"
import LocationList from "./LocationList";

class MyLocations extends Component {
    render() {
        return(
            <React.Fragment>
                <Nav />
                <LocationList
                {...this.props} />
            </React.Fragment>
        )
    }
}

export default MyLocations