import { fetch } from './fetch'

export const getMovieById = async (id: string) => {
  const { data } = await fetch(`?i=${id}`)
  return data
}

export const getMovieBySearchText = async ({
  searchTerm,
  page,
  type = 'movie',
  y,
}: {
  searchTerm: string
  page?: number
  type?: 'movie' | 'search' | 'series'
  y?: number
}) => {
  const { data } = await fetch(`?s=${searchTerm}&page=${page}&type=${type}&y=${y}`)
  return data
}
