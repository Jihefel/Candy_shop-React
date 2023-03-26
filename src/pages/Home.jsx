import {
  Container,
  Carousel,
  Row,
  Col,
  InputGroup,
  Form,
} from "react-bootstrap";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { goOther, goHome } from "../features/Navbar/isOnHomePage";
import data from "../assets/data/data.json";
import { useState, useEffect } from "react";
import Product from "../common/Product";
import { IoMdSearch } from "react-icons/io";

function Home() {
  const isHome = useSelector((state) => state.isHome.value);
  const dispatch = useDispatch();

  // Récupérer les noms de toutes les propriétés de l'objet "data"
  const typesDeProduits = Object.keys(data);

  // Itérer sur chaque propriété de l'objet "data" pour filtrer les produits avec une bannière
  const produitsAvecBannieres = typesDeProduits.flatMap((typeDeProduit) => {
    const produitsDeType = data[typeDeProduit];
    return produitsDeType.filter((produit) =>
      produit.hasOwnProperty("banniere")
    );
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(goHome());
    } else {
      dispatch(goOther());
    }
  }, [location]);

  const [typesDeProduitsAAfficher, setTypesDeProduitsAAfficher] = useState(
    Object.values(data)
  );
  let produitsArray = [];

  const dataCopy = [...Object.values(data)];
  dataCopy.forEach((type) => {
    type.forEach((produit) => {
      produitsArray.push(produit);
    });
  });

  const [produitsFiltres, setProduitsFiltres] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();

    setProduitsFiltres(
      produitsArray.filter((produit) => {
        // Vérifier si le nom du produit inclut la valeur de recherche
        if (produit.nom.toLowerCase().includes(searchValue)) {
          return true;
        }

        // Vérifier si le nom d'une variation inclut la valeur de recherche
        for (const variation of produit.variations) {
          if (variation.nom.toLowerCase().includes(searchValue)) {
            return true;
          }
        }
        return false;
      })
    );
  };

  return (
    <>
      {isHome ? (
        <>
          <Carousel>
            {produitsAvecBannieres.map((produit) => (
              <Carousel.Item key={produit.id}>
                <Link
                  to={
                    produit.id.includes("bo")
                      ? "/bonbons"
                      : produit.id.includes("bc")
                      ? "/barres_chocolatées"
                      : produit.id.includes("ed")
                      ? "/energy_drinks"
                      : produit.id.includes("co")
                      ? "/confiseries"
                      : produit.id.includes("ch")
                      ? "/chips"
                      : "/"
                  }
                >
                  <img
                    className="d-block w-100"
                    src={require(`../assets/images/${produit.banniere}`)}
                    alt="First slide"
                    loading="lazy"
                  />
                  <Carousel.Caption className="px-5">
                    <h3>{produit.nom}</h3>
                    <p>{produit.description}</p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
          <InputGroup className="my-5 w-25 mx-auto">
            <Form.Control
              placeholder="Rechercher un produit..."
              aria-label="search"
              aria-describedby="basic-addon1"
              onChange={handleSearch}
            />
            <InputGroup.Text id="basic-addon1">
              <IoMdSearch />
            </InputGroup.Text>
          </InputGroup>
          <Row
            xs={2}
            md={5}
            className={
              "g-0 d-flex justify-content-center " +
              (produitsFiltres.length === 0
                ? ""
                : produitsFiltres.length < 5
                ? "gap-4"
                : "")
            }
          >
            {produitsFiltres.length === 0 ? (
              Object.values(data).map((types) =>
                types.map((type) => (
                  <Col key={type.id} className="m-0">
                    <Product typeOfProduct={type} />
                  </Col>
                ))
              )
            ) : produitsFiltres === "no" ? (
              <h1>no</h1>
            ) : (
              produitsFiltres.map((prod) => (
                <Col key={prod.id} className="m-0">
                  <Product typeOfProduct={prod} />
                </Col>
              ))
            )}
          </Row>
        </>
      ) : (
        <Container>
          <Outlet />
        </Container>
      )}
    </>
  );
}

export default Home;
