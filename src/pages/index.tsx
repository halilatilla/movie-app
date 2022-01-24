import { useRef } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { MovieList, Loading } from '@src/components'
import { getMovieBySearchText } from '@src/api'
import { useGetMovieBySearchText, useIntersectionObserver } from '@src/hooks'

const Home: NextPage = (props: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useGetMovieBySearchText({
    initialData: props.data,
    searchText: 'pokemon',
  })

  const loadMoreRef = useRef<HTMLHeadingElement>(null)

  /*   useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  }) */

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto p-3 md:p-6 space-y-5">
        {data?.pages && <MovieList movies={data?.pages?.[0]?.Search} />}
        {isError ? (
          <div className="text-red-500 font-bold"> You may not request more than 100 items. </div>
        ) : (
          <div ref={loadMoreRef} className={`${!hasNextPage ? 'hidden' : ''}`}>
            {isFetchingNextPage && <Loading loadingText="Loading more..." />}
          </div>
        )}
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await getMovieBySearchText('pokemon')

  return { props: { data } }
}
