import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Mnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "50px", textDecoration: "none"}}>
        <Navbar.Brand href="#home" style={{marginRight: "50px"}}>Shivam</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Mnavbar;