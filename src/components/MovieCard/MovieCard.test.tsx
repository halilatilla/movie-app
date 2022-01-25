import { render, screen } from '@testing-library/react'

import MovieCard from './MovieCard'

describe('Movie Card', () => {
  const MOVIE = {
    movie: {
      Poster: '/',
      Title: '',
      Type: '',
      Year: '',
      imdbID: '',
    },
  }

  it('renders correctly', () => {
    const { container } = render(<MovieCard {...MOVIE} />)
    expect(container).toMatchSnapshot()
  })

  it('renders MovieCard', () => {
    render(<MovieCard {...MOVIE} />)

    const movieCard = screen.getByTestId('movie-card')

    expect(movieCard).toBeInTheDocument()
  })
})
