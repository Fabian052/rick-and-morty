import axios from "axios"
import { useEffect, useState } from "react"

const Resident = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null)

  const statusStyle = {
    "Alive": "bg-green-500",
    "Dead": "bg-red-500",
    "unknown": "bg-gray-500",
  }

  useEffect(() => {
    axios.get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <article className="mx-1 border border-green-500">
      <div className="relative">
        <img className="border-b-2 border-green-500" src={residentInfo?.image} alt="Image of resident" />
        <div className="flex gap-2 items-center absolute bottom-10 left-1/2 -translate-x-1/2 border border-green-500 px-6 bg-[rgba(0,_0,_0,_.8)]">
          <div className={`rounded-full h-4 aspect-square ${statusStyle[residentInfo?.status]}`}>
          </div>
          {residentInfo?.status}
        </div>
      </div>
      <div>
        <h4 className="text-3xl p-4 font-bold">{residentInfo?.name}</h4>

        <ul className="flex flex-col gap-2 px-4 pb-5">
          <li className="text-zinc-500 flex gap-6 font-medium text-base ">Species: <span className="text-white font-bold text-lg">{residentInfo?.species}</span></li>
          <li className="text-zinc-500 flex gap-8 font-medium text-base">Origin: <span className="text-white font-bold text-lg">{residentInfo?.origin.name}</span></li>
          <li className="text-zinc-500 flex gap-2 font-medium text-base">Times appear: <span className="text-white font-bold text-lg">{residentInfo?.episode.length} time/s</span></li>
        </ul>
      </div>

    </article>
  )
}
export default Resident