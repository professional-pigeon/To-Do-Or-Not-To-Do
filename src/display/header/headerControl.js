import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './HeaderControl.css'

function HeaderControl() {
  return (
    <Navbar expand="lg" id="navbarStyle">
      <Container>
        <Navbar.Brand href="#home">To-Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/professional-pigeon">Github</Nav.Link>
            <Nav.Link href="#link">linkedIn</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderControl