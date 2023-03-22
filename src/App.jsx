import Product from "./components/Product";
import NavBar from "./components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
