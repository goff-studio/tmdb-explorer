import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../tmdb/types'
import { Screens } from '../navigation/types'
import { useNavigation } from '@react-navigation/native'
import { TmdbImage } from '../tmdb/TmdbImage'
import { LinearGradient } from 'expo-linear-gradient'
import { themeConfig } from '../theme/themeConfig'
import { convertToRgba } from '../theme/utils'
import { Text } from '../theme/Text'
import { FavoriteButton } from '../favorites/FavoriteButton'

type Props = {
  movie: Movie
  size?: number
}

const GRADIENT_COLOR_A = convertToRgba(themeConfig.colors.primaryDark, 0.05)
const GRADIENT_COLOR_B = themeConfig.colors.background

const MovieCard: React.FC<Props> = ({ size = 250, movie }) => {
  const navigation = useNavigation()

  // todo: use appropriate type for navigation, this requires adding types to the navigation
  const handleNavigateDetails = () => {
    navigation.navigate(Screens.Details as never, { movie } as never)
  }

  return (
    <TouchableOpacity
      style={[styles.container, { width: size, height: size }]}
      onPress={handleNavigateDetails}
    >
      <TmdbImage movie={movie} style={styles.container} />
      <LinearGradient
        start={{ x: 0.7, y: 0 }}
        end={{ x: 0, y: 0.7 }}
        colors={[GRADIENT_COLOR_A, GRADIENT_COLOR_B]}
        style={[styles.container, styles.content]}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.title} numberOfLines={2}>
            {movie.title}
          </Text>
          <Text style={styles.details}>Release Date: {movie.release_date}</Text>
          <Text style={styles.details}>Rating: {movie.vote_average}</Text>
        </View>
        <FavoriteButton movie={movie} />
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  content: {
    position: 'absolute',
    padding: themeConfig.spacing.small,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  details: {
    fontSize: 14,
    color: themeConfig.colors.textDark,
  },
})

export default MovieCard
