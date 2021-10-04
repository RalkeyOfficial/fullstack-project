import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import './Navbar.css'

function navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <ul className="navbar-items">
                        <li><a href="/">item 1</a></li>
                        <li><a href="/">item 2</a></li>
                        <li><a href="/">item 3</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar
