import { fetch } from './fetch'

export const getMovieByName = async (movieName: any = 'pokemon') => {
  const { data } = await fetch(`?t=${movieName}`)

  return data
}

export const getMovieBySearchText = async (searchText: string) => {
  const { data } = await fetch(`?s=${searchText}`)
  return data
}
