import React from 'react'
import { useTrendingMovies } from './hooks'
import { HorizontalMoviesList } from '../movies/HorizontalMoviesList'

export const TrendsMovies = () => {
  const { data } = useTrendingMovies()
  return <HorizontalMoviesList data={data || []} title={'Trends of the week'} />
}
