import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import './Nav.css'

class Nav extends Component {
    logout = () => {
        sessionStorage.clear()
    }

    render() {
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"));
        const username = currentUser.username
        const usernameCAPS = username.toUpperCase();


        return (
            <nav className="n-bar">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="n-link" to="/Home">
                        <img className="n-img" src={ require('../img/logo-small.png') } alt="Java Juice Small Logo"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="n-link" to="/Add">ADD</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="n-link" to="/Search">SEARCH</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="n-link" to="/MyLocations">MY LOCATIONS</Link>
                    </li>
                    <li className="nav-item">
                        <p className="n-username">HI, {usernameCAPS}</p>
                        <Link className="n-link n-logout" to="/LogOut" onClick={this.logout}>LOG OUT</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav