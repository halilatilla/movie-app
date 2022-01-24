import { FC } from 'react'

import { IMovies } from '@src/types'
import MovieCard from '../MovieCard/MovieCard'

interface Props {
  movies: IMovies[]
}

const CharacterList: FC<Props> = ({ movies }) => {
  return (
    <div data-testid="character-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
      {movies?.map((movie: any) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default CharacterList
