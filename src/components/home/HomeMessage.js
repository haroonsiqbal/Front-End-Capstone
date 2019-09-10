import React, { Component } from "react"


class HomeMessage extends Component {
    handleSearchButton = (event) => {
        this.props.history.push("/Search");
    }
    
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <p>Java Juice helps you search local coffee shops by the number of available power outlets.</p>
                <p>With Java Juice, you'll never have to worry about losing battery life while working or studying on the go.</p>
                <p>Please press the search button below to find a location near you.</p>

                <form onSubmit={this.handleSearchButton}>
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default HomeMessage