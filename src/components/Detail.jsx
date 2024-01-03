import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Detail = () => {
  //  obtener el ID del personaje mediante useParams.
  const { id } = useParams();

  // Crea un estado local con el nombre character.
  const [character, setCharacter] = useState({});

  // Estado local con los episodios.
  const [episodes, setEpisodes] = useState([]);

  console.log(character)
  const navigate = useNavigate();



  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        setCharacter(char);

        if (char.episode) {
          const episodes = char.episode.map((episode) =>
            fetch(episode).then((response) => response.json())
          );
          Promise.all(episodes).then((episodes) => setEpisodes(episodes));
        }
      }
    );
  }, [id]);
  
  return (
    <div>
       <button className='border border-slate-300 p-2 bg-zinc-600 rounded-lg hover:bg-zinc-400 text-white m-10' onClick = { () => navigate (-1)}>
            Volver
        </button>
      <div className='text-white'>
        <h2 className='text-2xl font-bold text-center mb-6 text-green-300'>Detalle de: {character.name} </h2>
        <img className='rounded-full border-red-700 w-60 h-60 mb-5 flex justify-center text-center m-auto' src={character.image} alt={character.name} />

        <div className='grid grid-cols-1 text-center sm:grid-cols-3 bg-white max-w-screen-md mx-auto rounded-lg'>
          <h2 className='text-lg p-5 text-sky-600'><span className='text-xl text-sky-800 ml-10'>Specie:</span> {character.species}</h2>
          <h2 className='text-lg p-5 text-sky-600'><span className='text-xl text-sky-800 ml-10'>Status:</span> {character.status}</h2>
          <h2 className='text-lg p-5 text-sky-600'><span className='text-xl text-sky-800 ml-10'>Gender:</span> {character.gender}</h2>
          <h2 className='text-lg p-5 text-sky-600'><span className='text-xl text-sky-800 ml-10'>Origin:</span> {character.origin ? character.origin.name : 'Desconocido'}</h2>
          <h2 className='text-lg p-5 text-sky-600'><span className='text-xl text-sky-800 ml-10'>Location:</span> {character.location ? character.location.name : 'Desconocido'}</h2>
          <h2 className='text-lg p-5 text-sky-600'><span className='text-xl text-sky-800 ml-10'>Created:</span> {character.created ? character.created.slice(0, 10) : 'Desconocido'}</h2>
        </div>

        <div className='text-center sm:grid-cols-3 bg-white max-w-screen-md mx-auto rounded-lg mt-10'>
          <h2 className='text-lg p-5 text-sky-600'><span className='text-xl text-sky-800 ml-10'>Episodios:</span> {episodes.map(episode => episode.episode).join(', ')}</h2>
        </div>
        
       
      </div>
      
    </div>
    
  )
}

export default Detail