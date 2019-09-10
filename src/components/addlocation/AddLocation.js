import React, { Component } from "react"
import Nav from "../nav/Nav"
import AddForm from "./AddForm";

class AddLocation extends Component {
    render() {
        return(
            <React.Fragment>
                <Nav />
                <AddForm
                    {...this.props} />
            </React.Fragment>
        )
    }
}

export default AddLocation