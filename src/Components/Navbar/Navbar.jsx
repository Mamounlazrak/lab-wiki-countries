import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    WikiCountries
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar