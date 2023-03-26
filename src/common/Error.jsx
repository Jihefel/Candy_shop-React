import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="text-center h-100 mt-5">
      <h1>Erreur 404 : Page introuvable</h1>
      <p>Désolé, la page que vous recherchez n'a pas été trouvée.</p>
      <Link to="/" className="backHome">Retourner à la page d'accueil</Link>
    </div>
  );
}

export default Error;
