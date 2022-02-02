import { fetch } from './fetch'

export const getMovieById = async (id: string) => {
  const { data } = await fetch(`?i=${id}`)
  return data
}

export const getMovieBySearchText = async ({ searchTerm, page }: { searchTerm: string; page?: number }) => {
  const { data } = await fetch(`?s=${searchTerm}&page=${page}`)
  return data
}
