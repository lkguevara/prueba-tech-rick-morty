import Card from './card'
import PropTypes from 'prop-types';

const Cards = ({personajes}) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 p-6 justify-items-center mt-12">
         
    {
       personajes.map((personaje, index) => (
        <Card
            key={index}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
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