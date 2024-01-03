import PropTypes from 'prop-types';

const Pagination = ({ paginaActual, setPaginaActual }) => {
  return (
    <div className="flex justify-center items-center gap-3 my-8">
      <button
        className= {`py-1 px-4 rounded-full text-white ${paginaActual === 1 ? 'bg-gray-300 cursor-default' : 'bg-gray-500 hover:bg-gray-400'}`}
        onClick={() => setPaginaActual(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        {"<"}
      </button>
        <span className="text-white font-bold">{paginaActual}</span>
      <button
        className= {`py-1 px-4 rounded-full text-white ${paginaActual === 34 ? 'bg-gray-300 cursor-default' : 'bg-gray-500 hover:bg-gray-400'}`}
        onClick={() => setPaginaActual(paginaActual + 1)}
      >
        {">"}
      </button>
    </div>
  )
}

Pagination.propTypes = {
    paginaActual: PropTypes.number.isRequired,
    setPaginaActual: PropTypes.func.isRequired,
};


export default Pagination