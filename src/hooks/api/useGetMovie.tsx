import { useQuery } from 'react-query'

import { getMovieBySearchText, getMovieByTitle } from '@src/api'

export const useGetMovieBySearchText = ({ searchTerm, type, y }: any) => {
  const { data, isError, isFetching, isLoading, error } = useQuery(
    ['getMovieBySearchText', { variables: { searchTerm, type, y } }],
    () => getMovieBySearchText({ searchTerm, type, y }),
    {
      enabled: Boolean(searchTerm),
    },
  )

  return { data, isError, isFetching, isLoading, error }
}

export const useGetMovieByTitle = (title: string) => {
  const { data, isError, isFetching, isLoading, error } = useQuery(['getMovieByTitle', title], () =>
    getMovieByTitle(title),
  )

  return { data, isError, isFetching, isLoading, error }
}
