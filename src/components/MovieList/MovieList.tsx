import { FC } from 'react'

import { IMovie } from '@src/types'
import { MovieCard } from '@src/components'

interface Props {
  movies: IMovie[]
}

const CharacterList: FC<Props> = ({ movies }) => {
  return (
    <div data-testid="movie-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {movies?.map((movie: IMovie, index: number) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  )
}

export default CharacterList
