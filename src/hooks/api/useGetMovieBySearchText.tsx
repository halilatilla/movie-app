import { useInfiniteQuery } from 'react-query'

import { getMovieBySearchText } from '@src/api'

export const useGetMovieBySearchText = ({ initialData, searchText }: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useInfiniteQuery(
    'getMovieBySearchText',
    () => getMovieBySearchText(searchText),
    {
      initialData,
      /*   getNextPageParam: ({ total, limit }) => {
        const nextPage = limit + 30
        return nextPage <= total ? nextPage : undefined
      }, */
    },
  )

  return { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage }
}
