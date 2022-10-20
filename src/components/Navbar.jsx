import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

const NavB = () => {
  return (
    <Navbar expand="lg" className="Navbar d-flex justify-content-between">
      <Container>
        <div id="nav-left">
          <NavDropdown title="Courses" className="c-dropdown"></NavDropdown>
          <div id="search-bar">
            <input type="text" placeholder="Search" id="search-text" />
            <span>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </span>
          </div>
        </div>
        <Navbar.Brand href="#home">
          <img className="logo-img" src="/images/KA-logo.png" />
          <span className="logo-text">Khan Academy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} id="hamburger" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Donate</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;
