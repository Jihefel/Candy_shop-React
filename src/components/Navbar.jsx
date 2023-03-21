import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/images/dall-e.png";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import data from "../assets/data/data.json"

function NavBar() {

  const [isShown, setIsShown] = useState(false);
  

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" style={{height : "150px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/">Home</NavLink>
            <NavDropdown title="Produits" id="basic-nav-dropdown" renderMenuOnMount={true} menuVariant="dark">
              {Object.keys(data).map((category, index) => (
                <NavDropdown.Item key={index}>
                <NavLink to={category}>{category.replace(/_/g, " ")}</NavLink>
              </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            Invité
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;