import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { IMovie } from '@src/types'
import { BLUR_DATA_URL } from '@src/constants'
interface Props {
  movie: IMovie
}

const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie?.imdbID}`}>
      <motion.a
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="group grid overflow-hidden  rounded bg-gray-700"
        data-testid="movie-card"
      >
        <div className="relative h-[500px]">
          {movie.Poster !== 'N/A' ? (
            <Image
              layout="fill"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="transform object-cover object-center transition duration-300  group-hover:scale-110 "
              src={movie?.Poster}
              alt={movie?.Title}
            />
          ) : (
            <Image
              layout="fill"
              className="transform object-cover object-center transition duration-300  group-hover:scale-110 "
              src="https://via.placeholder.com/450?text=No+Poster"
              alt={movie?.Title}
            />
          )}
        </div>
        <div className="flex-center mx-auto max-w-[80%] flex-col space-y-2 py-2">
          <div className="text-center font-bold">{movie?.Title}</div>
          <div className="text-center font-medium">{movie?.Year}</div>
        </div>
      </motion.a>
    </Link>
  )
}

export default MovieCard
