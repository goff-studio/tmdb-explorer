import React from 'react'
import { useTopRatedMovies } from './hooks'
import { HorizontalMoviesList } from '../movies/HorizontalMoviesList'

export const TopRates = () => {
  const { data } = useTopRatedMovies()
  return <HorizontalMoviesList data={data || []} title={'Top Rated'} />
}
