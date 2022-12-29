import React from 'react'
import './nav.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap'
import Logo from '../../Image/logo_event.png'
import Search from '../../Image/Shape.png'

const Navs = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} width='122' ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features"> */}
            <div className=' wrap-search d-flex align-items-center'>
              <img className='imgSearch'src={Search}></img>
              <input className='search-bar'type="text" placeholder="Search your venue location"></input>
            </div>
            {/* </Nav.Link> */}
            <div className='wrap-exp d-flex'>
              <Nav.Link href="#pricing">Explore Event</Nav.Link>
              <Nav.Link href="#">Help</Nav.Link>
              <div className='line'></div>
            </div>
            
          </Nav>
          <Nav>
          {/* <Nav.Link href="#pricing">Explore Event</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>
            <div className='line'></div> */}
            <Nav.Link href="#deets">
              <Button className='btn-event'>Create Event</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button className='btn-sign'>Sign In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navs