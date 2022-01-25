import { fetch } from './fetch'

export const getMovieById = async (id: string) => {
  const { data } = await fetch(`?i=${id}`)
  return data
}

export const getMovieBySearchText = async (searchText: string) => {
  const { data } = await fetch(`?s=${searchText}`)
  return data
}
