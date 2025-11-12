import {Card} from "react-bootstrap";

const CardPersonaje = ({personaje}) => {

    return (
        <div>
             <Card className="my-4">
                <Card.Header className="fw-bold">{personaje.name}</Card.Header>
      <Card.Img variant="top" src={personaje.image}/>   
      <Card.Body>
        <Card.Text>
     Descripcion: {personaje.description}
        </Card.Text>
        <ul className="list-group">
            <li className="list-group-item">Ki: {personaje.ki}</li>
            <li className="list-group-item">Raza: {personaje.race}</li>
            <li className="list-group-item">Grupo:{personaje.affiliation}</li>
        </ul>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardPersonaje;