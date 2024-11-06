import { tmdb } from './api'
import { Genre, Movie, Queries } from './types'

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await tmdb.get(Queries.Search, {
    params: { query },
  })
  return response?.data?.results || []
}

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get(Queries.Trending)
  return response?.data?.results || []
}
export const fetchTopRatedMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get(Queries.TopRated)
  return response?.data?.results || []
}

export const fetchGenres = async (): Promise<Genre[]> => {
  const response = await tmdb.get(Queries.Genres)
  return response?.data?.genres || []
}
