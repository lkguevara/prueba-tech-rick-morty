import { useEffect, useState } from "react"
import Cards from "./components/cards"
import logo from "./assets/rick.svg"
import Pagination from "./components/Pagination";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);


  // Traer los personajes de la API una vez que el componente se monte
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${paginaActual}`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
        setLoading(false);
      })
      
    }, [paginaActual]);


  return (
    <>
      <img src={logo} alt="logo" className="w-48 mx-auto my-8 md:w-64"/>
      {
        loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-teal-400 mt-48"></div>
          </div>
        ) : (
          <Cards personajes={personajes} />
        )
      }
      <Pagination paginaActual={paginaActual} setPaginaActual={setPaginaActual}/>
      
    </>
  )
}

export default App
