import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './HeaderControl.css'

function HeaderControl({ setAbout }) {
  return (
    <Navbar expand="lg" id="navbarStyle">
      <Container>
        <Navbar.Brand onClick={()=> setAbout(false)}>To-Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.linkedin.com/in/kyle-kay-perez-911700214/">LinkedIn</Nav.Link>
            <Nav.Link onClick={()=> setAbout(true)}>About This Project</Nav.Link>
            <NavDropdown title="Hosted Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://drum-machine-kp.herokuapp.com/">Drum Machine</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/professional-pigeon">Github</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderControl
