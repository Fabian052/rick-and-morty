import axios from "axios"

const Location = ({ location, setLocation }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.error(err))
  }

  return (
    <section className="bg-[url(/images/header.png)] bg-cover min-h-[200px] bg-center w-[100%]">
      <div className='bg-[url(/images/port.png)] bg-cover bg-center h-[250px] flex sm:h-[490px]'></div>
      
      {/* input de búsqueda */}
      <form className="flex justify-center h-[40px]" onSubmit={handleSubmit}>
        <input autoComplete="off" className="text-white outline-none bg-[rgba(0,_0,_0,_.3)] text-center text-black w-[220px] border-2 border-green-500" id="newLocation" placeholder="Type a location Id..." type="text" />
        <button className="border-y-2 border-r-2 border-green-500 w-[65px] bg-green-800"><i className='bx bx-search'></i></button>
      </form>

      {/* Massage of page */}
      <h2 className="text-green-400 flex justify-center font-bold text mt-6">¡Wellcome to the crazy universe!</h2>

      {/* Info location */}
      <article className="text-center border-2 border-green-500 mx-3 mt-12">
        <h2 className="font-bold text-lg py-4">{location?.name}</h2>
        <ul className="grid gap-2 px-4 pb-4 sm:grid-cols-3">
          <li className="flex gap-4 font-medium text-lg">Type: <span className="font-normal text-base">{location?.type}</span></li>
          <li className="flex gap-4 font-medium text-lg">Dimension: <span className="font-normal text-base">{location?.dimension}</span></li>
          <li className="flex gap-4 font-medium text-lg">Population: <span className="font-normal text-base">{location?.residents.length}</span></li>
        </ul>
      </article>
    </section>
  )
}
export default Location