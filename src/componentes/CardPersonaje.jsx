import { Card } from "react-bootstrap";
import "./CardPersonaje.css"; // estilos para achicar la imagen

const CardPersonaje = ({ personaje }) => {
  return (
    <Card className="my-4">
      <Card.Header className="fw-bold">{personaje.name}</Card.Header>

      <Card.Img
        variant="top"
        src={personaje.image}
        alt={personaje.name}
        className="personaje-img" // se estiliza en el .css
      />

      <Card.Body>
        <Card.Text className="text-start">
          <span className="fw-semibold">Descripción:</span> {personaje.description}
        </Card.Text>
        <ul className="list-group text-start">
          <li className="list-group-item">Ki: {personaje.ki}</li>
          <li className="list-group-item">Raza: {personaje.race}</li>
          <li className="list-group-item">Grupo: {personaje.affiliation}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default CardPersonaje;
