import Product from "./common/Product";
import NavBar from "./common/Navbar";
import Home from "./pages/Home";
import Error from './common/Error';
import { Row, Col } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./assets/data/data.json";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
      children: [
        {
          path: "bonbons",
          element: (
            <>
              <Row xs={1} md={3} className="g-4 d-flex justify-content-evenly">
                {data.bonbons.map((bonbon, index) => (
                  <Col key={index}>
                    <Product key={bonbon.id} typeOfProduct={bonbon} />
                  </Col>
                ))}
              </Row>
            </>
          ),
        },
        {
          path: "barres_chocolatées",
          element: (
            <>
              <Row xs={1} md={3} className="g-4 d-flex justify-content-evenly">
                {data.barres_chocolatées.map((barre, index) => (
                  <Col key={index}>
                    <Product key={barre.id} typeOfProduct={barre} />
                  </Col>
                ))}
              </Row>
            </>
          ),
        },
        {
          path: "energy_drinks",
          element: (
            <>
              <Row xs={1} md={3} className="g-4 d-flex justify-content-evenly">
                {data.energy_drinks.map((boisson, index) => (
                  <Col key={index}>
                    <Product key={boisson.id} typeOfProduct={boisson} />
                  </Col>
                ))}
              </Row>
            </>
          ),
        },
        {
          path: "confiseries",
          element: (
            <>
              <Row xs={1} md={3} className="g-4 d-flex justify-content-evenly">
                {data.confiseries.map((confiserie, index) => (
                  <Col key={index}>
                    <Product key={confiserie.id} typeOfProduct={confiserie} />
                  </Col>
                ))}
              </Row>
            </>
          ),
        },
        {
          path: "chips",
          element: (
            <>
              <Row xs={1} md={3} className="g-4 d-flex justify-content-evenly">
                {data.chips.map((paquetChips, index) => (
                  <Col key={index}>
                    <Product key={paquetChips.id} typeOfProduct={paquetChips} />
                  </Col>
                ))}
              </Row>
            </>
          ),
        },
      ],
    },
    {
      path: '/*',
      element: <Error/>
    }
  ]);

  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

export default App;
