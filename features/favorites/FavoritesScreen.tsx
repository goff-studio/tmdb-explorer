import { useFavorites } from './hooks'
import { FlatList, StyleSheet, View } from 'react-native'
import MovieCard from '../movies/MovieCard'
import React, { useCallback } from 'react'
import { Screen } from '../theme/Screen'
import { themeConfig } from '../theme/themeConfig'
import { Movie } from '../tmdb/types'
import { ListSeparator } from '../theme/ListSeparator'
import { Text } from '../theme/Text'
import { EmptyState } from '../discovery/EmptyState'

const ITEM_SIZE = themeConfig.dimensions.screenWidth / 2 - themeConfig.spacing.large

const FavoritesScreen = () => {
  const { data: favorites } = useFavorites()

  const renderItem = useCallback(({ item }: { item: Movie }) => {
    return (
      <View style={styles.withSeparator}>
        <MovieCard movie={item} size={ITEM_SIZE} />
      </View>
    )
  }, [])

  return (
    <Screen edges={['bottom', 'top']} paddingHorizontal={themeConfig.spacing.small}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList<Movie>
        numColumns={2}
        ItemSeparatorComponent={ListSeparator}
        data={favorites}
        ListEmptyComponent={<EmptyState message={'No favorite movies found!'} />}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    paddingHorizontal: themeConfig.spacing.medium / 2,
    marginBottom: themeConfig.spacing.medium,
  },
  withSeparator: {
    paddingHorizontal: themeConfig.spacing.medium / 2,
  },
})

export default FavoritesScreen
