import React, { useState } from 'react'
import { Screen } from '../theme/Screen'
import { TrendsMovies } from './TrendsMovies'
import { Poster } from './Poster'
import { DiscoverySearchList } from './DiscoverySearchList'
import SearchBar from './SearchBar'
import { FullScreenLoading } from '../theme/FullScreenLoading'
import { ErrorModal } from './ErrorModal'
import { useTrendingMovies } from './hooks'
import { TopRates } from './TopRates'
import { ScrollView, StyleSheet, View } from 'react-native'

const DiscoveryScreen = () => {
  const [query, setQuery] = useState('')
  const handleSearch = query => {
    setQuery(query)
  }

  const { data: trends, error, isLoading } = useTrendingMovies()

  const poster = !query && !!trends?.length ? trends[0] : undefined

  return (
    <Screen edges={['bottom']}>
      {!!poster && <Poster movie={poster} />}
      <ScrollView>
        <SearchBar onSearch={handleSearch} poster={poster} />
        {!!poster && (
          <View style={styles.horizontalDataContainer}>
            <TrendsMovies />
            <TopRates />
          </View>
        )}
      </ScrollView>
      {isLoading && <FullScreenLoading />}
      {!!error && <ErrorModal error={error} />}
      {!!query && <DiscoverySearchList query={query} />}
    </Screen>
  )
}

const styles = StyleSheet.create({
  horizontalDataContainer: {
    rowGap: 10,
    marginBottom: '20%',
  },
})

export default DiscoveryScreen
