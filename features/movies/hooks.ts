import { useQuery } from 'react-query'
import { fetchGenres } from '../tmdb/services'
import { Queries } from '../tmdb/types'

export const useGenres = () => {
  return useQuery(Queries.Genres, fetchGenres)
}
