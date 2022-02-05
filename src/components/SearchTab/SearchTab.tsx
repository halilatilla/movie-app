import { FC } from 'react'
import randomWords from 'random-words'

import { Input, Select, Button } from '@src/components'
import { useAppSelector, useAppDispatch } from '@src/store/store'
import { setSearchTerm, setYear, setType, setRandomTerm } from '@src/store/reducers/searchSlice'

interface Props {
  isLoading?: boolean
}

const MovieCard: FC<Props> = ({ isLoading }) => {
  const { searchTerm, type, year } = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()

  const getRandomMovie = () => {
    const randomMovie = randomWords()
    dispatch(setRandomTerm(randomMovie))
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Input
        label="name"
        placeholder="enter a movie name"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.currentTarget.value))}
      />
      <Input
        label="year"
        type="number"
        placeholder="enter a year"
        value={year}
        onChange={(e) => dispatch(setYear(e.currentTarget.value))}
      />

      <Select
        label="type"
        placeholder="Select a type"
        options={['movie', 'series', 'episode']}
        value={type}
        onChange={(e) => dispatch(setType(e.target.value))}
      />
      {/* <Button label="give me a random one" onClick={getRandomMovie} className="self-end" disabled={isLoading} /> */}
    </div>
  )
}

export default MovieCard
