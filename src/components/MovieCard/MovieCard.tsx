import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IMovie } from '@src/types'
import { BLUR_DATA_URL } from '@src/constants'
interface Props {
  movie: IMovie
}

const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie?.imdbID}`}>
      <a className="group rounded overflow-hidden border bg-gray-700 grid" data-testid="movie-card">
        <div className="h-[500px] relative">
          {movie.Poster !== 'N/A' ? (
            <Image
              layout="fill"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-center object-cover transition duration-300 transform  group-hover:scale-110 "
              src={movie?.Poster}
              alt={movie?.Title}
            />
          ) : (
            <Image
              layout="fill"
              className="object-center object-cover transition duration-300 transform  group-hover:scale-110 "
              src="https://via.placeholder.com/450?text=No+Poster"
              alt={movie?.Title}
            />
          )}
        </div>
        <div className="flex-center flex-col max-w-[80%] mx-auto space-y-2 py-2">
          <div className="font-bold text-center">{movie?.Title}</div>
          <div className="font-medium text-center">{movie?.Year}</div>
        </div>
      </a>
    </Link>
  )
}

export default MovieCard
