import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      {/* logo */}
      <Link to="/">
        <h3>tapKeeper</h3>
      </Link>

      {/* navlinks */}
      <ul className={open ? 'navlinks open' : 'navlinks'}>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={() => setOpen(!open)}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" onClick={() => setOpen(!open)}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/signup"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  )
}
