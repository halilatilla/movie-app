import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { getMovieById } from '@src/api'
import { IMovieDetails } from '@src/types'
import { BLUR_DATA_URL } from '@src/constants'

const Movie: NextPage<{ movie: IMovieDetails }> = ({ movie }) => {
  return (
    <>
      <Head>
        <title>Marvel | {movie?.Title} </title>
      </Head>
      <main className="container mx-auto p-3 md:p-6">
        <p>{movie?.Title}</p>
        <p>{movie?.Runtime}</p>
        <div className="relative mx-auto h-[600px] max-w-lg rounded border">
          {movie.Poster !== 'N/A' ? (
            <Image
              layout="fill"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              src={movie?.Poster}
              alt={movie?.Title}
            />
          ) : (
            <Image layout="fill" src="https://via.placeholder.com/450?text=No+Poster" alt={movie?.Title} />
          )}
        </div>
      </main>
    </>
  )
}

export default Movie

type Params = {
  params: {
    id: string
  }
}

export const getServerSideProps = async ({ params }: Params) => {
  const { id } = params
  const data: IMovieDetails = await getMovieById(id)
  return { props: { movie: data } }
}
