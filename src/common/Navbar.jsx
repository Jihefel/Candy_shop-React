import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  Badge,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import data from "../assets/data/data.json";
import logo from "../assets/images/dall-e3.png";
import { goOther, goHome } from "../features/Navbar/isOnHomePage";
import { connection, deconnection } from "../features/Navbar/isConnectedSlice";
import { setUser } from "../features/Navbar/userName";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Cart from "./../pages/Cart";
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

  const username = useSelector((state) => state.username.value);
  const numberArticle = useSelector((state) => state.numberArticle.value);
  const connectionStatus = useSelector((state) => state.isConnected.status);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const icons = [
    <TbCandy />,
    <GiChocolateBar />,
    <GiSodaCan />,
    <GiCupcake />,
    <GiChipsBag />,
  ];

  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setNavbarBgColor("linear-gradient(to top, white 20%, #fc8f00)");
      } else {
        setNavbarBgColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setUser(event.target[0].value));
    setTypeOfButton("button");
    dispatch(connection());
  };

  const deconnexion = () => {
    dispatch(setUser("Invité"));
    dispatch(deconnection());
  };



  return (
    <Navbar expand="lg" sticky="top" style={{ background: navbarBgColor }}>
      <Container>
        <Link to="/">
          <Navbar.Brand className="me-0">
            <img src={logo} alt="" style={{ height: "150px" }} />
          </Navbar.Brand>
        </Link>
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
              connectionStatus === false ? (
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
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Popover>
                        <Popover.Body>
                          <strong>{username.at(0).toUpperCase() + username.substring(1).toLowerCase()}</strong> vous avez <strong>{numberArticle}</strong> article{numberArticle > 1 ? "s" : ""} dans votre panier.
                          Cliquez ici pour plus de détails.
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button className="button-panier rounded-4 d-flex align-items-center gap-2" onClick={()=> navigate("cart")}>
                      <HiShoppingCart />{" "}
                      <Badge bg="secondary" className="align-self-center top-0">
                        {numberArticle}
                      </Badge>
                    </Button>
                  </OverlayTrigger>
                </div>
              )
            ) : (
              <Form
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                className="ms-4"
              >
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
