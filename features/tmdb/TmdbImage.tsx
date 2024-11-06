import React from 'react'
import { Image, ImageProps } from 'expo-image'
import { Movie } from './types'

type Props = {
  movie: Movie
  isBackdrop?: boolean
} & ImageProps

export const TmdbImage: React.FC<Props> = ({ movie, isBackdrop, ...props }) => {
  const path = isBackdrop && !!movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path
  if (!path) return null
  return <Image {...props} source={{ uri: `https://image.tmdb.org/t/p/w500${path}` }} />
}
