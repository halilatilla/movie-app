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

  const { data, isError, isLoading, error } = useGetMovieBySearchText({
    searchTerm: debouncedSearchTerm,
    type: debouncedType,
    y: debouncedYear,
  })

  if (isError) {
    return <div className="font-bold text-red-500"> {error} </div>
  }

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto space-y-8 p-3 md:p-6">
        <SearchTab />
        {isLoading && <Loading loadingText="Searching..." />}
        {data?.Response === 'True' ? (
          <MovieList movies={data?.Search} />
        ) : (
          !isLoading && (
            <div className="text-center ">
              <img
                src="https://www.hyperui.dev/photos/confused-travolta.gif"
                alt="John Travolta confused"
                className="mx-auto h-64 w-full max-w-md rounded-lg object-cover"
              />

              <p className="mt-6 text-gray-300">We can't find anything, try searching again.</p>
            </div>
          )
        )}
      </main>
    </>
  )
}

export default Home
