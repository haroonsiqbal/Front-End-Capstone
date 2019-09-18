import React, { Component } from "react"
import { Jumbotron, Button } from 'reactstrap';
import './Home.css'

class HomeMessage extends Component {
    handleSearchButton = (event) => {
        this.props.history.push("/Search");
    }
    
    render() {
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"));
        const username = currentUser.username

        return (
            <div className="welcome-container">
            <Jumbotron>  
                <h2>Welcome, {username}</h2><br></br>
                <p>Java Juice helps you search local coffee shops by the number of available power outlets.</p>
                <p>With Java Juice, you'll never have to worry about losing battery life while working or studying on the go.</p>
                <p>Please press the search button below to find a location near you.</p><br></br>

                <form onSubmit={this.handleSearchButton}>
                    <Button className="welcomeb" color="danger" type="submit">
                        SEARCH
                    </Button>
                </form>
            </Jumbotron>
            </div>
        )
    }
}

export default HomeMessage