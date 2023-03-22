import Product from "./components/Product";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
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
              <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
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
              <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
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
              <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
                {data.energy_drinks.map((boisson, index) => (
                  <Col key={index}>
                    <Product key={boisson.id} typeOfProduct={boisson} />
                  </Col>
                ))}
              </Row>
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

export default App;
