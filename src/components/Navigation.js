import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { isMobileOnly } from 'react-device-detect'

export default function Navigation() {

  const linkStyle = { textDecoration: 'none', color: 'white' }
  const DesktopNavigation = (
    <Navbar bg="dark" variant="dark" sticky="top" style={{minWidth: '1366px'}}>
      <Navbar.Brand>
        <NavLink to="/" style={linkStyle}>
          <span style={{ fontSize: '2em' }}>Oregon COVID-19 Hospital and Supply Capacity</span>
        </NavLink>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to='/about' style={linkStyle}>
        <span style={{ fontSize: '2em', borderStyle: 'solid', padding: '3px 8px' }}>About</span>
        </NavLink>
      </Nav>
    </Navbar>)

  const MobileNavigation = (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <NavLink to="/" style={linkStyle}>
          <span style={{ fontSize: '1em' }}>Oregon COVID-19 Hospital <br />and Supply Capacity</span>
        </NavLink>
      </Navbar.Brand>
    </Navbar>)
  return (
    isMobileOnly ? MobileNavigation : DesktopNavigation
  )
}
