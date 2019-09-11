import React, { Component } from "react"
import Nav from "../nav/Nav"
import SearchList from "./SearchList";
import SearchForm from "./SearchForm";

class Search extends Component {
    render() {
        return(
            <React.Fragment>
                <Nav />
                <SearchForm
                    {...this.props} />
                <SearchList
                    {...this.props} />
            </React.Fragment>
        )
    }
}

export default Search