import noFound from '../assets/no-found.png'

const NoFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl text-teal-500">
      <h1 className="font-bold">¡Ups!</h1>
      <p>No pudimos encontrar lo que estás buscando.</p>
      <img src={noFound} alt="Rick triste" className="w-48 mx-auto my-8 md:w-64" />
    </div>
  )
}

export default NoFound