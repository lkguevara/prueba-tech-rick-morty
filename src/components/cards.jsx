import Card from './card'

const cards = ({personajes}) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6 justify-items-center">
         
    {
       personajes.map((personaje, index) => (
        <Card
            key={index}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
        />
    ))} 
    </div>
  ) 
}

export default cards