import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandom } from './util/random'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandom()}`

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className='bg-black text-white min-h-screen'>
      
      <Location location={location} setLocation={setLocation} />
      <ResidentList location={location} residents={location?.residents} />
        
    </main>
  )
}

export default App
