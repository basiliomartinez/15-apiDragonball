import { useEffect, useState } from "react";
import logo from "./assets/Logo_Dragon_Ball_Z.jpg";
import CardPersonaje from "./componentes/CardPersonaje";
import { Button, Spinner } from "react-bootstrap";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    obtenerPersonaje();
  }, []);

  const obtenerPersonaje = async () => {
    try {
      setMostrarSpinner(true);
      const numeroAleatorio = Math.floor(Math.random() * 58) + 1;
      const response = await fetch(
        // OJO: sin espacio antes del número
        `https://dragonball-api.com/api/characters/${numeroAleatorio}`
      );

      if (response.status === 200) {
        const datos = await response.json();
        setPersonaje(datos);
      } else {
        alert("No se pudo obtener los datos del personaje");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al obtener el personaje");
    } finally {
      setMostrarSpinner(false);
    }
  };

  return (
    <main className="container text-center">
      <img src={logo} alt="logo dragon ball Z" className="mt-3 img-fluid" />

      <div>
        {mostrarSpinner ? (
          <Spinner className="mt-3" animation="grow" variant="warning" />
        ) : (
          <CardPersonaje personaje={personaje} />
        )}
      </div>

      <Button className="my-3" variant="warning" onClick={obtenerPersonaje}>
        Obtener Personaje
      </Button>
    </main>
  );
}

export default App;
