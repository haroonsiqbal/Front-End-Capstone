import React, { Component } from "react"
import { Link } from "react-router-dom"
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar bg-danger">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Add">Add</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/MyLocations">My Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/LogOut">Log Out</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav