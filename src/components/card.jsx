import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Card = ({id, name, status, image}) => {
  return (
   <>
      <NavLink to={`/detail/${id}`}>
         <div className="flex flex-col bg-teal-800 rounded-3xl border-2 border-teal-500 items-center w-64 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
               <div className= "">
                  <img 
                     className="rounded-full border-red-700 w-40 h-40 mb-5 " 
                     loading="lazy"
                     src={image} 
                     alt={name} 
                  />
               </div>

               <div className="bg-white w-full rounded-b-2xl">
                  <h1 className="text-2xl font-bold text-rose-900 text-center">{name}</h1>
                  <div className="flex justify-center items-center gap-3 pb-5">
                     <span className="text-rose-700">{status}</span>
                  </div>
               </div>
         </div>
      </NavLink>
   </>
  )
}

Card.propTypes = {
   name: PropTypes.string.isRequired,
   status: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired
};

export default Card