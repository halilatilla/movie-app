import { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useDebounce } from 'use-debounce'

import { MovieList, Loading } from '@src/components'
import { useGetMovieBySearchText } from '@src/hooks'

const Home: NextPage = () => {
  const [searchedText, setSearchedText] = useState('pokemon')
  const [debouncedSearchTerm] = useDebounce(searchedText, 1000)

  const { data, isError, isLoading } = useGetMovieBySearchText({
    searchTerm: debouncedSearchTerm,
  })

  /*  if (isLoading) {
    return <Loading loadingText="Loading more..." />
  } */

  if (isError) {
    return <div className="text-red-500 font-bold"> Error </div>
  }

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto p-3 md:p-6 space-y-5">
        <h1 className="text-center text-2xl">What an awesome movie app !!</h1>

        <input
          type="text"
          placeholder="enter a movie name"
          className="text-black mx-auto px-1 placeholder:text-black"
          value={searchedText}
          onChange={(e) => setSearchedText(e.currentTarget.value)}
        />
        {isLoading && <Loading loadingText="Searching..." />}
        {data?.Response === 'True' ? <MovieList movies={data?.Search} /> : !isLoading && <div>There is no movie</div>}
      </main>
    </>
  )
}

export default Home
