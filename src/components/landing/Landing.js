import React, { Component } from "react"

class Landing extends Component {

    handleLoginButton = (event) => {
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className="landing_container">
                <img className="landing_img" src={ require('./javajuice.png') } alt="Java Juice Logo"/>
                <form onSubmit={this.handleLoginButton}>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }

}

export default Landing