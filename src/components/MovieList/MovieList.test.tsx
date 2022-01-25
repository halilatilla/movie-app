import { render, screen } from '@testing-library/react'

import MovieList from './MovieList'

describe('Movie List', () => {
  const MOVIES = {
    movies: [],
  }

  it('renders correctly', () => {
    const { container } = render(<MovieList {...MOVIES} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Movie List', () => {
    render(<MovieList {...MOVIES} />)

    const movieList = screen.getByTestId('movie-list')

    expect(movieList).toBeInTheDocument()
  })
})
