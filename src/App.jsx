import { useEffect, useState } from "react";
import logo from "./assets/Logo_Dragon_Ball_Z.jpg";
import CardPersonaje from "./componentes/CardPersonaje";
import { Button } from "react-bootstrap";

function App() {
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    obtenerPersonaje();
  }, []);

  const obtenerPersonaje = async () => {
    try {
      const response = await fetch(
        "https://dragonball-api.com/api/characters/1"
      );
      console.log(response);
      if(response.status===200){
        const datos=  await response.json()
        console.log(datos)
        setPersonaje(datos)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="container my-5 text-center">
        <img src={logo} alt="logo dragon ball Z" />
        <CardPersonaje></CardPersonaje>
        <Button variant="warning">Obtener personaje</Button>
      </main>
    </>
  );
}

export default App;
