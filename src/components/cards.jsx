import Card from './card'
import PropTypes from 'prop-types';

const Cards = ({personajes}) => {
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

Cards.propTypes = {
  personajes: PropTypes.array.isRequired,
};

export default Cards