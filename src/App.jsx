import Product from "./components/Product";
import NavBar from "./components/Navbar";
import { Container, Row, Col } from "react-bootstrap";



function App() {

  

  return (
    <>
      <NavBar />
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
    </>
  );
}

export default App;
