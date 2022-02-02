import { useQuery } from 'react-query'

import { getMovieBySearchText } from '@src/api'

export const useGetMovieBySearchText = ({ searchTerm }: any) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ['getMovieBySearchText', searchTerm],
    () => getMovieBySearchText({ searchTerm }),
    {
      enabled: Boolean(searchTerm),
    },
  )

  return { data, isError, isFetching, isLoading }
}
