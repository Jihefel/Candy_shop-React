import { Button, Card, Tab, Tabs, Table, Form, OverlayTrigger } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addArticle, deleteArticle } from "../features/Cart/articlesSlice";
import { increment, decrement } from "../features/Navbar/numberArticle";

function Product(props) {
  const typeOfProduct = props.typeOfProduct;
  
  const panier = useSelector((state) => state.articles.items)
  const connectionStatus = useSelector((state) => state.isConnected.status);
  const [selectedProduct, setSelectedProduct] = useState(typeOfProduct.variations[0]);

  const dispatch = useDispatch()
  const [articlesDansPanier, setArticlesDansPanier] = useState([]);


  const handleSelectVariations = (e) => {
    const selectedVariation = typeOfProduct.variations.find(
      (variation) => variation.nom === e.target.id
    );
    if (selectedVariation) {
      setSelectedProduct(selectedVariation);
    }
  };

  const addArticleToCart = (article) => {
    if (connectionStatus) {
      dispatch(addArticle(article));
      dispatch(increment())
      setArticlesDansPanier(panier);
    } else {
      alert("Connectez vous pour ajouter un article au panier")
    }
  }

  const nomEntier = typeOfProduct.nom + " " + (selectedProduct.nom === typeOfProduct.nom ? (typeOfProduct.variations.length > 1 ? typeOfProduct.variations[0].nom : "") : selectedProduct.nom)

  return (
    <div className="products">
      <Card>
        <Card.Header>
          <Card.Title className="my-2 text-center">{nomEntier}</Card.Title>
        </Card.Header>
        <Card.Img
          variant="top"
          src={require(`../assets/images/${selectedProduct.image}`)}
        />
        <Card.Body>
          <h1 className="text-end price">{typeOfProduct.prix}€</h1>
          <Form className="d-flex justify-content-around">
            {typeOfProduct.variations.map((vari, index) => (
              <div className="d-flex flex-column" key={index}>
                <Form.Check
                  className="text-center"
                  type="radio"
                  name="variations"
                  id={vari.nom}
                  value={vari.nom}
                  onClick={handleSelectVariations}
                  defaultChecked = {vari.nom === typeOfProduct.variations[0].nom ? true : false}
                />
                <div className="text-center">
                    <div className="variation-apercu">
                      <img
                        src={require(`../assets/images/${vari.image}`)}
                        alt={vari.nom}
                      />
                    </div>
                  <label htmlFor={index}>
                    {vari.nom}
                  </label>
                </div>
              </div>
            ))}
          </Form>
          <Tabs
            defaultActiveKey="description"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="description" title="Description">
              <Card.Text>{typeOfProduct.description}</Card.Text>
            </Tab>
            <Tab eventKey="details" title="Détails">
              <h6>Ingrédients</h6>
              <Card.Text>
                {typeOfProduct.details.ingredients_principaux.map(
                  (ingredient) => ingredient + ", "
                )}
              </Card.Text>
              <h6>Infos nutrionnelles</h6>
              <Table striped bordered hover size="sm">
                <tbody>
                  {Object.entries(
                    typeOfProduct.details.info_nutritionnelles
                  ).map(([key, value], index) => (
                    <tr key={index}>
                      <th>{key.at(0).toUpperCase() + key.substring(1)}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={()=> addArticleToCart([typeOfProduct, selectedProduct])}>Ajouter au panier</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Product;
