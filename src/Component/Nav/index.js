import React from 'react'
import './nav.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap'
import Logo from '../../Image/logo_event.png'

const Navs = () => {
  return (
    <div>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo}></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Explore Event</Nav.Link>
            <Nav.Link href="#features">Help</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navs