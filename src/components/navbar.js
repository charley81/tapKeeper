/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoMdBeer } from 'react-icons/io'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      css={css`
        background: transparent;
        height: 5rem;
        width: 100%;
        display: flex;
        justify-content: space-between;

        h3 {
          display: flex;
          align-items: center;
        }

        .logo {
          color: var(--color-light);
        }

        .logo-icon {
          color: var(--colorMid);
        }

        .nav-link {
          color: var(--color-light);
        }
      `}
    >
      {/* logo */}
      <h3>
        <Link to="/" className="logo">
          <IoMdBeer className="logo-icon" />
          tapKeeper
        </Link>
      </h3>

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
