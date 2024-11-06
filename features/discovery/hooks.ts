import { useQuery, UseQueryResult } from 'react-query'
import { fetchMovies, fetchTopRatedMovies, fetchTrendingMovies } from '../tmdb/services'
import { Movie, Queries } from '../tmdb/types'

export const useSearchMovies = (query: string): UseQueryResult<Movie[]> => {
  return useQuery([Queries.Search, query], () => fetchMovies(query))
}
export const useTrendingMovies = (): UseQueryResult<Movie[]> => {
  return useQuery([Queries.Trending], fetchTrendingMovies)
}
export const useTopRatedMovies = (): UseQueryResult<Movie[]> => {
  return useQuery([Queries.TopRated], fetchTopRatedMovies)
}
