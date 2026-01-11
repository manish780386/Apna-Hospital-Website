import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'   

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Apna Hospital</h1>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/doctor">Doctor</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
