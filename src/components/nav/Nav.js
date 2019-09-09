import React, { Component } from "react"
import { Link } from "react-router-dom"


class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Add">Add Location</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/MyLocations">My Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">Log Out</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav