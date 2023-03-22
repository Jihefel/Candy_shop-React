import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "../assets/data/data.json"

function Home() {
  const isHome = useSelector((state) => state.isHome.value);

  // Récupérer les noms de toutes les propriétés de l'objet "data"
const typesDeProduits = Object.keys(data);

// Itérer sur chaque propriété de l'objet "data" pour filtrer les produits avec une bannière
const produitsAvecBannieres = typesDeProduits.flatMap(typeDeProduit => {
  const produitsDeType = data[typeDeProduit];
  return produitsDeType.filter(produit => produit.hasOwnProperty("banniere"));
});

  return (
    <>
      <Container>
        {isHome ? (
          <Carousel>
              {produitsAvecBannieres.map((produit) => (
            <Carousel.Item key={produit.id}>
              <img
                className="d-block w-100"
                src={require(`../assets/images/${produit.banniere}`)}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{produit.nom}</h3>
                <p>
                  {produit.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
              ))}
          </Carousel>
        ) : (
          <Outlet />
        )}
      </Container>
    </>
  );
}

export default Home;
