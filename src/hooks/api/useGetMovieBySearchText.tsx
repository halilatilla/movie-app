import { useQuery } from 'react-query'

import { getMovieBySearchText } from '@src/api'

export const useGetMovieBySearchText = ({ searchTerm, type, y }: any) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ['getMovieBySearchText', { variables: { searchTerm, type, y } }],
    () => getMovieBySearchText({ searchTerm, type, y }),
    {
      enabled: Boolean(searchTerm),
    },
  )

  return { data, isError, isFetching, isLoading }
}
