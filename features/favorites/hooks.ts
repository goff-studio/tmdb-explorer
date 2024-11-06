import { useMutation, useQuery, useQueryClient, UseQueryResult } from 'react-query'
import { getFavorites, removeFavorite, saveFavorite } from './services'
import { FAVORITES_KEY } from './config'
import { Movie } from '../tmdb/types'

export const useFavorites = (): UseQueryResult<Movie[]> => {
  return useQuery(FAVORITES_KEY, getFavorites)
}

export const useSaveFavorite = () => {
  const queryClient = useQueryClient()
  return useMutation(saveFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries(FAVORITES_KEY)
    },
  })
}

export const useRemoveFavorite = () => {
  const queryClient = useQueryClient()
  return useMutation(removeFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries(FAVORITES_KEY)
    },
  })
}
