import PropTypes from 'prop-types';

const Pagination = ({ paginaActual, setPaginaActual }) => {
  return (
    <div className="flex justify-center items-center gap-3 my-8">
      <button
        className="bg-gray-500 hover:bg-gray-400 text-white py-1 px-4 rounded-full"
        onClick={() => setPaginaActual(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        Anterior: {paginaActual === 1 ? null : paginaActual - 1 }
      </button>
        <span className="text-white font-bold">{paginaActual}</span>
      <button
        className="bg-gray-500 hover:bg-gray-400 text-white py-1 px-4 rounded-full"
        onClick={() => setPaginaActual(paginaActual + 1)}
      >
        Siguiente: {paginaActual + 1}
      </button>
    </div>
  )
}

Pagination.propTypes = {
    paginaActual: PropTypes.number.isRequired,
    setPaginaActual: PropTypes.func.isRequired,
};


export default Pagination