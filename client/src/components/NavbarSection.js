import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

export default function NavbarSection() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <Image
              alt=""
              src="\public\logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              roundedCircle /> {' '} {' '}
          <b>harma.dev</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Certificates</Nav.Link>
            <Nav.Link href="#pricing">Hire Me</Nav.Link>
            <Nav.Link href="#pricing">Mpesa me a coffee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
