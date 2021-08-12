/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoMdBeer } from 'react-icons/io'
import { FiMenu, FiX } from 'react-icons/fi'

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
        align-items: center;
        padding: 1rem;
        max-width: var(--max-width);
        margin: auto;

        .nav-icon {
          display: none;
          font-size: 2rem;
          transition: var(--transition);
          background: transparent;
          cursor: pointer;
          border: transparent;
          color: var(--color-light);
        }

        .logo {
          color: var(--color-secondary);
          display: flex;
          align-items: center;
          font-size: 2rem;
        }

        .logo-first-span {
          color: var(--color-light);
        }

        .logo-second-span {
          color: var(--color-primary);
        }

        .logo-icon {
          color: var(--colorMid);
          transition: var(--transition);
        }

        .nav-links {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 2rem;
        }

        .nav-link {
          color: var(--color-light);
          transition: var(--transition);

          &:hover {
            color: red;
          }
        }

        @media screen and (max-width: 768px) {
          position: relative;

          .nav-links {
            display: flex;
            flex-direction: column;
            position: absolute;
            text-align: center;
            width: 50%;
            top: 10rem;
            right: -100%;
            background: var(--color-dark);
            transition: var(--transition);
            height: 100vh;
          }

          .nav-links.open {
            transition: var(--transition);
            right: 0;
          }

          .nav-icon {
            display: block;
            color: white;
            margin-top: 1rem;
          }
        }
      `}
    >
      {/* logo */}
      <h3>
        <Link to="/" className="logo">
          <IoMdBeer className="logo-icon" />
          <span className="logo-first-span">tap</span>
          <span className="logo-second-span">Keeper</span>
        </Link>
      </h3>

      {/* menu-icons */}
      <button onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* navlinks */}
      <ul className={open ? 'nav-links open' : 'nav-links'}>
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
