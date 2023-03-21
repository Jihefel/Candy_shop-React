import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.sass";
import App from "./App";
import Produits from "./components/Produits";
import Product from "./components/Product";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./assets/data/data.json";
import NavBar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "bonbons",
        element: (
          <>
            <Container>
              {data.bonbons.map((bonbon, index) => (
                <Row
                  xs={1}
                  md={3}
                  className="g-4 d-flex justify-content-between"
                  key={index}
                >
                  <Col>
                    <Product key={bonbon.id} typeOfProduct={bonbon} />
                  </Col>
                </Row>
              ))}
            </Container>
          </>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
