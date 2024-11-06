import React, { useCallback } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Movie } from '../tmdb/types'
import { ListSeparator } from '../theme/ListSeparator'
import MovieCard from '../movies/MovieCard'
import { themeConfig } from '../theme/themeConfig'
import { Text } from '../theme/Text'

const ITEM_SIZE = themeConfig.dimensions.screenWidth / 3 + themeConfig.spacing.medium

type Props = {
  data: Movie[]
  readMore?: () => void
  title: string
}
export const HorizontalMoviesList: React.FC<Props> = ({ data, readMore, title }) => {
  const renderItem = useCallback(({ item }: { item: Movie }) => {
    return <MovieCard movie={item} size={ITEM_SIZE} />
  }, [])

  return (
    <View>
      <Text style={styles.banner}>{title}</Text>
      <FlatList<Movie>
        data={data || []}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        keyExtractor={item => item.id.toString()}
        onEndReached={readMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  banner: {
    paddingHorizontal: themeConfig.spacing.medium,
    fontSize: 18,
    paddingVertical: themeConfig.spacing.small,
  },
})
