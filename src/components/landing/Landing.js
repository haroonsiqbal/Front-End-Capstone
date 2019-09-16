import React, { Component } from "react"
import './Landing.css'
import { Button } from 'reactstrap';

class Landing extends Component {

    handleLoginButton = (event) => {
        this.props.history.push("/login");
    }

    render() {
        return (
            <React.Fragment>
            <div className="logo-container">
                <img className="landing_img" src={ require('../img/javajuice.png') } alt="Java Juice Logo"/>
            </div>    
            <div className="landing-button-container">    
                <form onSubmit={this.handleLoginButton}>
                    <Button color="danger" type="submit">
                        LOGIN
                    </Button>
                </form>
            </div>
            </React.Fragment>
        )
    }

}

export default Landing