import React, { Component } from "react"
import { Link } from "react-router-dom"
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className="n-bar">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="n-link" to="/Home">HOME</Link>
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
                        <Link className="n-link" to="/LogOut">LOG OUT</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav