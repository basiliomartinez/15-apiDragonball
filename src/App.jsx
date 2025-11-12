import { useEffect, useState } from "react";
import logo from "./assets/Logo_Dragon_Ball_Z.jpg";
import CardPersonaje from "./componentes/CardPersonaje";
import { Button, Spinner } from "react-bootstrap";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState (true)

  useEffect(() => {
    obtenerPersonaje();
  }, []);


  const obtenerPersonaje = async () => {
    try {
      setMostrarSpinner(true)
      const numeroAleatorio = Math.floor(Math.random() * 58) + 1;
      const response = await fetch(
        `https://dragonball-api.com/api/characters/ ${numeroAleatorio}`
      );
      console.log(response);
      if (response.status === 200) {
        const datos = await response.json();
        console.log(datos);
        setPersonaje(datos);
setMostrarSpinner(false)
      } else if (response.status === 400) {
        alert("No se pudo obetener los datos del personaje");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="container text-center">
<img src={logo} alt="logo dragon ball Z" className="mt-3" /> 
<div>
           {
           mostrarSpinner ?  <Spinner className="mt-3" animation="grow" variant="warning" /> : 
        <CardPersonaje personaje={personaje}></CardPersonaje>
           }
        </div>
      
          <Button className="my-1" variant="warning" onClick={obtenerPersonaje}>
          Obtener Personaje
        </Button> 
        
      </main>
    </>
  );
}

export default App;
