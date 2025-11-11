import {Card} from "react-bootstrap";
const CardPersonaje = () => {
    return (
        <div>
             <Card className="my-4">
                <Card.Header className="fw-bold">Goku</Card.Header>
      <Card.Img variant="top" src="https://dragonball-api.com/characters/goku_normal.webp" className="img-fluid
      "/>   
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ul className="list-group">
            <li className="list-group-item">Ki: "60.000.000"</li>
            <li className="list-group-item">Raza: "Saiyan"</li>
            <li className="list-group-item">Grupo: "Z Fighter"</li>
        </ul>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardPersonaje;