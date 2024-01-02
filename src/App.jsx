import { useEffect, useState } from "react"
import Cards from "./components/cards"
import logo from "./assets/rick.svg"

function App() {
  // Crear un estado para guardar los personajes
  const [personajes, setPersonajes] = useState([]);

  // Traer los personajes de la API una vez que el componente se monte
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
  }
  , []);

  return (
    <>
      <img src={logo} alt="logo" className="w-48 mx-auto my-8 md:w-64"/>
      <Cards personajes={personajes} />
    </>
  )
}

export default App
