import { useEffect, useState } from "react"
import Resident from "./Resident"
import { paginationLogic } from "../util/pagination"

const FIRST_PAGE = 1

const ResidentList = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE)

  const { pages, residentsInPage } = paginationLogic(currentPage, residents)

  useEffect(() => {
    setCurrentPage(FIRST_PAGE)
  }, [location])

  return (
    <section className='bg-[url(/images/main.png)] bg-cover bg-center'>
      {/* List of residents */}
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_300px)] justify-center max-w-[1024px] mx-auto py-6">
        {
          residentsInPage?.map((resident) => <Resident key={resident} residentUrl={resident} />)
        }
      </section>

      {/* Pagination */}
      <section className="flex justify-center gap-4 flex-wrap pb-8 pt-4">
        {
          pages.map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`bg-green-700 py-1 px-3 rounded-md 
              ${currentPage === page && "border-4 border-green-500"}`}>{page}
            </button>))
        }
      </section>

    </section>
  )
}
export default ResidentList