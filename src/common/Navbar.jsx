import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import data from "../assets/data/data.json";
import logo from "../assets/images/dall-e3.png";
import { goOther, goHome } from "../features/Navbar/isOnHomePage";
import { setUser } from "../features/Navbar/userName";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// Icons
import { TiHome } from "react-icons/ti";
import { TbCandy } from "react-icons/tb";
import { FaUserSecret, FaUserCheck } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import {
  GiChocolateBar,
  GiSodaCan,
  GiCupcake,
  GiChipsBag,
} from "react-icons/gi";

function NavBar() {
  const [typeOfButton, setTypeOfButton] = useState("button");
  const [isConnected, setIsConnected] = useState(false);

  const username = useSelector((state) => state.username.value);
  const dispatch = useDispatch();

  const icons = [
    <TbCandy />,
    <GiChocolateBar />,
    <GiSodaCan />,
    <GiCupcake />,
    <GiChipsBag />,
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setUser(event.target[0].value));
    setTypeOfButton("button");
    setIsConnected(true);
  };

  const deconnexion = () => {
    dispatch(setUser("Invité"));
    setIsConnected(false);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="me-0">
          <img src={logo} alt="" style={{ height: "150px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              to="/"
              onClick={() => dispatch(goHome())}
              className="d-flex align-items-center me-3"
            >
              <TiHome /> Home
            </NavLink>
            {Object.keys(data).map((category, index) => (
              <NavLink
                to={category}
                onClick={() => dispatch(goOther())}
                key={index}
                className="d-flex align-items-center me-3"
              >
                {icons[index]}
                {category.replace(/_/g, " ")}
              </NavLink>
            ))}
          </Nav>
          <Nav className="d-flex flex-column align-items-center nav-right">
            {typeOfButton === "button" ? (
              isConnected === false ? (
                <button
                  type={typeOfButton}
                  className="connection-button d-flex align-items-center gap-2 text-capitalize"
                  onClick={() => setTypeOfButton(null)}
                >
                  <FaUserSecret /> Invité
                </button>
              ) : (
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="connection-button d-flex align-items-center gap-2 text-capitalize"
                    onClick={deconnexion}
                  >
                    <FaUserCheck /> {username}
                  </button>
                  <Button className="button-panier rounded-4">
                  <HiShoppingCart/> <Badge bg="secondary"></Badge>
                    <span className="visually-hidden">unread messages</span>
                  </Button>
                </div>
              )
            ) : (
              <Form onSubmit={handleSubmit} noValidate autoComplete="off" className="ms-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Pseudo" required />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    required
                  />
                </Form.Group>
                <Button type="submit" className="d-none"></Button>
              </Form>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
