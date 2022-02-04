import { NextPage } from 'next'
import Head from 'next/head'
import { useDebounce } from 'use-debounce'

import { MovieList, Loading, SearchTab } from '@src/components'
import { useGetMovieBySearchText } from '@src/hooks'
import { useAppSelector } from '@src/store/store'

const Home: NextPage = () => {
  const { searchTerm, type, year } = useAppSelector((state) => state.search)
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000)
  const [debouncedType] = useDebounce(type, 500)
  const [debouncedYear] = useDebounce(year, 1000)

  const { data, isError, isLoading } = useGetMovieBySearchText({
    searchTerm: debouncedSearchTerm,
    type: debouncedType,
    y: debouncedYear,
  })

  if (isError) {
    return <div className="text-red-500 font-bold"> Error </div>
  }

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto p-3 md:p-6 space-y-8">
        <SearchTab />

        {isLoading && <Loading loadingText="Searching..." />}
        {data?.Response === 'True' ? <MovieList movies={data?.Search} /> : !isLoading && <div>There is no movie</div>}
      </main>
    </>
  )
}

export default Home
