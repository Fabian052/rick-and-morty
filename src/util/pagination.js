export const paginationLogic = (currentPage, residents) => {
  if(!residents) {
    return {
      pages: [1],
      residentsInPage: []
    }
  }

  // Cantidad de residentes por página
  const RESIDENTS_PER_PAGE = 9

  // Cantidad total de páginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

  // Residentes a mostrar en la página actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, sliceEnd)

  // Páginas que se van a mostrar en la página actual
  const pages = []
  for(let i = 0; i <= totalPages; i++) {
    pages.push(i)
  }

  return {
    residentsInPage,
    pages
  }
}
