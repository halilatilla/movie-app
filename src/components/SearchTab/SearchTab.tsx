import { FC } from 'react'

import { Input, Select } from '@src/components'
import { useAppSelector, useAppDispatch } from '@src/store/store'
import { setSearchTerm, setYear, setType } from '@src/store/reducers/searchSlice'

interface Props {}

const MovieCard: FC<Props> = () => {
  const { searchTerm, type, year } = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
    </div>
  )
}

export default MovieCard
