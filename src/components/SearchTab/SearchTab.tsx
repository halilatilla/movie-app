import { FC } from 'react'

import { Input, Select } from '@src/components'

interface Props {
  type?: string
  setType: (type: string) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  year: number | string
  setYear: (year: number | string | any) => void
}

const MovieCard: FC<Props> = ({ type, setType, searchTerm, setSearchTerm, year, setYear }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Input
        label="name"
        placeholder="enter a movie name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <Input
        label="year"
        type="number"
        placeholder="enter a year"
        value={year}
        onChange={(e) => setYear(e.currentTarget.value)}
      />

      <Select
        label="type"
        placeholder="Select a type"
        options={['movie', 'series', 'episode']}
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
    </div>
  )
}

export default MovieCard
