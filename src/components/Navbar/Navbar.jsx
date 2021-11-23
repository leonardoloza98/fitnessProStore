import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Fitness ProStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Sobre Nosotros</Nav.Link>
            <Nav.Link>Productos</Nav.Link>
            <Nav.Link className="d-flex flex-row-reverse"><CartWidget className="p-2"></CartWidget></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
