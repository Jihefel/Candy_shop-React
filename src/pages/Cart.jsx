import { Container, ListGroup, Button, CloseButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Error from "./../common/Error";

function Cart() {
  const username = useSelector((state) => state.username.value);
  let panier = useSelector((state) => state.articles.items);
  const connectionStatus = useSelector((state) => state.isConnected.status);

  const [prixTotal, setPrixTotal] = useState(0);

  useEffect(() => {
    let additionDesPrix = 0;
    panier.forEach((article) => {
      additionDesPrix += parseFloat(article[0].prix);
    });
    setPrixTotal(additionDesPrix.toFixed(2));
  }, [panier]);

  const navigate = useNavigate();

  return connectionStatus === true ? (
    panier.length === 0 ? (
      <h1>
        <strong>
          {username.at(0).toUpperCase() + username.substring(1).toLowerCase()}
        </strong>{" "}
        votre panier est vide
      </h1>
    ) : (
      <div className="cart">
        <h2>
          <strong>
            {username.at(0).toUpperCase() + username.substring(1).toLowerCase()}
          </strong>
          , votre panier :
        </h2>
        <ListGroup>
          {panier.map((article) => (
            <ListGroup.Item
              key={article[0].id + "" + article[1].nom}
              className="articles-in-cart d-flex align-items-center justify-content-between py-3 border-0 bg-transparent"
            >
              <div>
                <img
                  src={require(`../assets/images/${article[1].image}`)}
                  alt={"Aperçu de " + article[0].nom + " " + article[1].nom}
                  style={{
                    maxWidth: "120px",
                    aspectRatio: "1/1",
                    objectFit: "contain",
                  }}
                  className="me-4"
                />
                <strong>{article[0].nom}</strong> - {article[1].nom}
              </div>
              <div className="d-flex gap-5 align-items-center">
                <h4 className="me-5 my-0">
                  <strong>{article[0].prix.toFixed(2)} €</strong>
                </h4>
                <CloseButton aria-label="Supprimer" />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h3 className="total text-end">
          Total: <strong>{prixTotal}</strong>€
        </h3>
        <Button>Checkout</Button>
      </div>
    )
  ) : (
    <Error />
  );
}

export default Cart;
