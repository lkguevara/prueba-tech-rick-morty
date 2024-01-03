import { useEffect, useState } from "react"
import { Routes, Route, NavLink } from "react-router-dom"
import logo from "./assets/rick.svg"
import noSearch from "./assets/rick-no-search.png"
import Pagination from "./components/Pagination";
import Cards from "./components/cards";
import Detail from "./components/Detail";
import NoFound from "./components/NoFound";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState('');
  console.log(busqueda)

  // Traer los personajes de la API una vez que el componente se monte
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${paginaActual}`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
        setLoading(false);
      })
      
    }, [paginaActual]);


    const personajesFiltrados = busqueda
    ? personajes.filter(personaje => personaje.name.toLowerCase().includes(busqueda.toLowerCase()))
    : personajes;
  return (
    <>
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-48 mx-auto my-8 md:w-64"/>
      </NavLink>
      <Routes>
        <Route path="/" element={
          <>
            <div className="flex justify-center items-center">
              <input 
                type="text" 
                placeholder="Buscar por nombre..." 
                value={busqueda} 
                onChange={e => setBusqueda(e.target.value)} 
                className="mb-4 p-2 border border-gray-400 rounded-md outline text-center"
              />
            </div>
            {
              loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-teal-400 mt-48"></div>
                </div>
              ) : personajesFiltrados.length === 0 ? (
                <div className="items-center mt-20">
                  <h1 className="text-3xl text-teal-400 text-center">¡No hay ningún personaje con ese nombre!</h1>
                  <img src={noSearch} alt="logo" className="w-48 mx-auto my-8 md:w-64"/>
                </div>
              ) : (
                <Cards personajes={personajesFiltrados} />
              )
            }
            {
              personajesFiltrados.length > 0 && <Pagination paginaActual={paginaActual} setPaginaActual={setPaginaActual}/>
            }
          </>
        } />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='*' element={<NoFound />} />
      </Routes>
    </>
  )
}

export default App
