// import Product from "./Product";
// import { Container, Row, Col } from "react-bootstrap";
// import data from "../assets/data/data.json";
// import { useRoutes } from "react-router-dom";

// function Produits() {
//   let produits = useRoutes([
//     {
//       path: "/bonbons",
//       element: data.bonbons.map((bonbon, index) => (
//               <Col key={index}>
//                 <Product key={bonbon.id} typeOfProduct={bonbon} />
//               </Col>
//             ))
//     },
//     {
//       path: "/chocolats",
//       element: 
//             data.barres_chocolatées.map((barre, index) => (
//               <Col key={index}>
//                 <Product key={barre.id} typeOfProduct={barre} />
//               </Col>
//             ))
//     },
//   ]);

//   return (
//     <Container>
//         <Row xs={1} md={3} className="g-4 d-flex justify-content-between">
//             {produits}
//         </Row>
//     </Container>
//   );
// }

// export default Produits;
