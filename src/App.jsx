import Product from "./components/Product";
import NavBar from "./components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import data from "./assets/data/data.json";

function App() {

  

  return (
    <>
      <NavBar />
      <Container>
        <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
          {data.bonbons.map((bonbon, index) => (
            <Col key={index}> 
              <Product key={bonbon.id} typeOfProduct={bonbon} />
            </Col>
          ))}
        </Row>
        <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
          {data.barres_chocolatées.map((barre, index) => (
            <Col key={index}> 
              <Product key={barre.id} typeOfProduct={barre} />
            </Col>
          ))}
        </Row>
        {/* <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
          {data.confiseries.map((barre, index) => (
            <Col key={index}> 
              <Product key={barre.id} typeOfProduct={barre} />
            </Col>
          ))}
        </Row>
        <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
          {data.energy_drinks.map((barre, index) => (
            <Col key={index}> 
              <Product key={barre.id} typeOfProduct={barre} />
            </Col>
          ))}
        </Row>
        <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
          {data.chips.map((barre, index) => (
            <Col key={index}> 
              <Product key={barre.id} typeOfProduct={barre} />
            </Col>
          ))}
        </Row> */}
      </Container>
    </>
  );
}

export default App;
