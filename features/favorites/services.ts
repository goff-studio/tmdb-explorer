import AsyncStorage from '@react-native-async-storage/async-storage'
import { FAVORITES_KEY } from './config'
import { Movie } from '../tmdb/types'

export const getFavorites = async (): Promise<Movie[]> => {
  const favorites = await AsyncStorage.getItem(FAVORITES_KEY)
  return favorites ? JSON.parse(favorites) : []
}

export const saveFavorite = async (movie: Movie) => {
  const favorites = await getFavorites()
  const newFavorites = favorites.filter(m => m.id !== movie.id)
  newFavorites.push(movie)
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites))
}

export const removeFavorite = async (movie: Movie) => {
  const favorites = await getFavorites()
  const newFavorites = [...(favorites || [])].filter(m => m.id !== movie.id)
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites))
}
