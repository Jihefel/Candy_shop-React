import {
  ListGroup,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addArticle, deleteArticle, decrementQuantity, emptyCart } from "../features/Cart/articlesSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdRemoveShoppingCart } from "react-icons/md"
import Error from "./../common/Error";

function Cart() {
  const username = useSelector((state) => state.username.value);
  const panier = useSelector((state) => state.articles.items);
  const connectionStatus = useSelector((state) => state.isConnected.status);

  const [quantiteProduit] = useState(
    panier.map((article) => article[1].quantity)
  );

  const [prixTotal, setPrixTotal] = useState(0);

  useEffect(() => {
    let additionDesPrix = 0;
    panier.forEach((article, index) => {
      additionDesPrix += parseFloat(article[0].prix) * parseInt(article[1].quantity);
    });
    setPrixTotal(additionDesPrix.toFixed(2));
  }, [panier, quantiteProduit]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

 const checkout = () => {
   const confirmCheckout = window.confirm("Confirmer votre achat ?")
   if (confirmCheckout) {
    dispatch(emptyCart());
    setTimeout(() => {
      alert(` ${username.at(0).toUpperCase() + username.substring(1).toLowerCase()}, merci pour votre achat !`)
    }, 300);
   }
 }


  return connectionStatus === true ? (
    panier.length === 0 ? (
      <>
        <h1>
          <strong>
            {username.at(0).toUpperCase() + username.substring(1).toLowerCase()}
          </strong>{" "}
          votre panier est vide
        </h1>
        <Link to="/" className="backHome">
          Retourner à la page d'accueil
        </Link>
      </>
    ) : (
      <div className="cart">
        <h2>
          <strong>
            {username.at(0).toUpperCase() + username.substring(1).toLowerCase()}
          </strong>
          , voici le contenu de votre panier :
        </h2>
        <ListGroup>
          {panier.map((article, index) => (
            <ListGroup.Item
              key={article[1].id + "_" + index}
              className="articles-in-cart d-flex align-items-center justify-content-between py-3 border-0 bg-transparent"
            >
              <div className="d-flex align-items-center">
                <div className="quantity me-5">
                  <InputGroup>
                    <Button
                      variant="orange"
                      onClick={() => {
                          dispatch(decrementQuantity(article, article[1]));
                      }}
                      disabled={
                        article[1].quantity <= 1 ? true : false
                      }
                    >
                      -
                    </Button>

                    <FormControl
                      type="number"
                      size="sm"
                      value={article[1].quantity}
                      className="text-center"
                      readOnly
                    />

                    <Button
                      variant="pink"
                      onClick={() => {
                        dispatch(addArticle(article, article[1]));
                      }}
                    >
                      +
                    </Button>
                  </InputGroup>
                </div>
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
                <h3 className="me-5 my-0">
                  <strong>
                    {(
                      article[0].prix.toFixed(2) *
                     article[1].quantity
                    ).toFixed(2)}{" "}
                    €
                  </strong>
                </h3>
                <Button
                  aria-label="Supprimer"
                  onClick={() => dispatch(deleteArticle(article[1].id))}
                  variant="pink"
                  className="text-white"
                ><MdRemoveShoppingCart /></Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h2 className="total text-end">
          Total: <strong>{prixTotal}</strong>€
        </h2>
        <Button onClick={checkout} variant="pink" className="text-white">Checkout</Button>
      </div>
    )
  ) : (
    <Error />
  );
}

export default Cart;
