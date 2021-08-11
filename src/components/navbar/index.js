import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbar-elements'

export default function index() {
  return (
    <Nav>
      <Bars />

      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/about" activeStyle>
          Contact
        </NavLink>
        <NavLink to="/about" activeStyle>
          Sign Up
        </NavLink>
        <NavLink to="/about" activeStyle>
          Sign In
        </NavLink>
      </NavMenu>
    </Nav>
  )
}
