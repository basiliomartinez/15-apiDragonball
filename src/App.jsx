import logo from "./assets/Logo_Dragon_Ball_Z.jpg";
import CardPersonaje from "./componentes/CardPersonaje";
import {Button} from "react-bootstrap";

function App() {
  return (
    <>
      <main className="container my-5 text-center">
        <img src={logo} alt="logo dragon ball Z" />
<CardPersonaje></CardPersonaje>
<Button variant='warning'>Obtener personaje</Button>
      </main>
    </>
  );
}

export default App;
