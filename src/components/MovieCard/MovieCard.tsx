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
    <Link href={`/movie/${movie.imdbID}`}>
      <a className="group rounded overflow-hidden border bg-gray-700" data-testid="movie-list-card">
        <div className="h-[200px] relative">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-center object-cover transition duration-300 transform  group-hover:scale-110 "
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
        <p className="font-bold text-center p-2">{movie.Title}</p>
        <p className="font-bold text-center p-2">{movie.Year}</p>
      </a>
    </Link>
  )
}

export default MovieCard
