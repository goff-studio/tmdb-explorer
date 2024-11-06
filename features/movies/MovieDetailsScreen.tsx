import React, { useMemo } from 'react'
import { Screen } from '../theme/Screen'
import { Poster } from '../discovery/Poster'
import { Movie } from '../tmdb/types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text } from '../theme/Text'
import { StatusBar, StyleSheet, View } from 'react-native'
import { themeConfig } from '../theme/themeConfig'
import { TmdbImage } from '../tmdb/TmdbImage'
import { CircleButton } from '../theme/CircleButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useGenres } from './hooks'
import { Chip } from '../theme/Chip'
import { FavoriteButton } from '../favorites/FavoriteButton'

export const MovieDetailsScreen = () => {
  const { params } = useRoute()
  const { movie } = (params || {}) as { movie: Movie }
  const { data: genres } = useGenres()

  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()
  const genresNames = useMemo(() => {
    if (!genres || !movie?.genre_ids) return []
    return genres.filter(genre => movie.genre_ids?.includes(genre.id)).map(genre => genre.name)
  }, [genres, movie])

  return (
    <Screen edges={['bottom']}>
      <Poster movie={movie} isBackdrop />
      <View
        style={[styles.backContainer, { marginTop: insets.top || StatusBar.currentHeight || 30 }]}
      >
        <CircleButton onPress={() => goBack()} ionIconName={'arrow-back'} />
        <FavoriteButton movie={movie} />
      </View>
      <View style={styles.content}>
        <View style={styles.coverContainer}>
          <TmdbImage style={styles.cover} movie={movie} />
          <Text style={styles.title} numberOfLines={2}>
            {movie.title}
          </Text>
        </View>
        <View style={styles.chipContainer}>
          {genresNames.length > 0 && genresNames.map(genre => <Chip label={genre} key={genre} />)}
        </View>

        <Text style={styles.details}>Release Date: {movie.release_date}</Text>
        <Text style={styles.details}>Rating: {movie.vote_average}</Text>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: themeConfig.spacing.medium,
  },
  coverContainer: {
    columnGap: themeConfig.spacing.medium,
    marginTop: themeConfig.dimensions.screenHeight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    padding: themeConfig.spacing.medium,
    justifyContent: 'space-between',
    rowGap: themeConfig.spacing.medium,
  },
  cover: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: themeConfig.colors.textDark,
  },
  chipContainer: {
    flexDirection: 'row',
  },
})
