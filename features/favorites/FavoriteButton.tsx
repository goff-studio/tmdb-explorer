import React, { useCallback, useMemo } from 'react'
import { useFavorites, useRemoveFavorite, useSaveFavorite } from './hooks'
import { CircleButton } from '../theme/CircleButton'
import { Movie } from '../tmdb/types'

type Props = {
  movie: Movie
}

export const FavoriteButton: React.FC<Props> = ({ movie }) => {
  const saveFavoriteMutation = useSaveFavorite()
  const removeFavoriteMutation = useRemoveFavorite()
  const { data: favorites } = useFavorites()
  const isLiked = useMemo(
    () => (favorites || []).some(fav => fav.id === movie.id),
    [favorites, movie]
  )
  const handleSave = useCallback(() => {
    if (isLiked) {
      removeFavoriteMutation.mutate(movie)
      return
    }
    saveFavoriteMutation.mutate(movie)
  }, [isLiked, movie, removeFavoriteMutation, saveFavoriteMutation])
  return (
    <CircleButton ionIconName={isLiked ? 'heart-dislike-outline' : 'heart'} onPress={handleSave} />
  )
}
