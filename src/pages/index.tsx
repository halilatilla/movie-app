import { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useDebounce } from 'use-debounce'

import { MovieList, Loading, SearchTab } from '@src/components'
import { useGetMovieBySearchText } from '@src/hooks'

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('pokemon')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000)
  const [type, setType] = useState('movie')
  const [year, setYear] = useState('')
  const [debouncedSearchYear] = useDebounce(year, 1000)

  const { data, isError, isLoading } = useGetMovieBySearchText({
    searchTerm: debouncedSearchTerm,
    type,
    y: debouncedSearchYear,
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
        <SearchTab
          type={type}
          setType={setType}
          year={year}
          setYear={setYear}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {isLoading && <Loading loadingText="Searching..." />}
        {data?.Response === 'True' ? <MovieList movies={data?.Search} /> : !isLoading && <div>There is no movie</div>}
      </main>
    </>
  )
}

export default Home
