import React, { useCallback } from 'react'
import Animated, { FadeIn, FadeOut, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { FlatList, StyleSheet, View } from 'react-native'
import { themeConfig } from '../theme/themeConfig'
import { useSearchMovies } from './hooks'
import { Movie } from '../tmdb/types'
import MovieCard from '../movies/MovieCard'
import { ListSeparator } from '../theme/ListSeparator'
import { EmptyState } from './EmptyState'
import { Text } from '../theme/Text'
import parseQueryError from '../tmdb/utils'

type Props = {
  query: string
}
const ITEM_SIZE = themeConfig.dimensions.screenWidth / 2 - themeConfig.spacing.large

export const DiscoverySearchList: React.FC<Props> = ({ query }) => {
  const { data: movies, fetchNextSearchPage, isLoading, error } = useSearchMovies(query)
  const { message } = parseQueryError(error)

  const renderItem = useCallback(({ item, index }: { item: Movie }) => {
    return (
      <View style={styles.withSeparator}>
        <MovieCard movie={item} size={ITEM_SIZE} />
      </View>
    )
  }, [])

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(query ? 1 : 0, { duration: 300 }),
    }
  }, [query])

  return (
    <Animated.View style={[styles.container, rStyle]} pointerEvent={!query ? 'none' : undefined}>
      <FlatList<Movie>
        numColumns={2}
        data={movies || []}
        renderItem={renderItem}
        ListEmptyComponent={!isLoading ? EmptyState : undefined}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        keyExtractor={item => item.id.toString()}
        onEndReached={fetchNextSearchPage}
        onEndReachedThreshold={0.5}
      />
      {!!error && (
        <Animated.View style={styles.error} entering={FadeIn} exiting={FadeOut}>
          <Text>{message}</Text>
        </Animated.View>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: themeConfig.spacing.medium / 2,
    backgroundColor: themeConfig.colors.background,
    width: themeConfig.dimensions.screenWidth,
    height: themeConfig.dimensions.screenHeight,
  },
  withSeparator: {
    paddingHorizontal: themeConfig.spacing.medium / 2,
  },
  error: {
    backgroundColor: themeConfig.colors.backgroundDark,
    position: 'absolute',
    bottom: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
})
