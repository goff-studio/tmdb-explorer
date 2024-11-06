import React, { useState } from 'react'
import { Keyboard, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { themeConfig } from '../theme/themeConfig'
import { Ionicons } from '@expo/vector-icons'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Movie } from '../tmdb/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {
  onSearch: (query: string) => void
  poster: Movie | undefined
}

const SearchBar: React.FC<Props> = ({ onSearch, isSearchActive, poster }) => {
  const [query, setQuery] = useState('')
  const handleSearch = () => {
    Keyboard.dismiss()
    onSearch(query)
  }
  const handleClose = () => {
    Keyboard.dismiss()
    onSearch('')
    setQuery('')
  }
  const insets = useSafeAreaInsets()
  const rContainerStyle = useAnimatedStyle(() => {
    return {
      paddingTop: withTiming(
        !poster ? StatusBar.currentHeight || insets.top : themeConfig.dimensions.screenHeight / 2.2
      ),
      marginBottom: themeConfig.spacing.medium,
    }
  }, [poster])

  return (
    <Animated.View style={rContainerStyle}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search movies..."
          value={query}
          onChangeText={setQuery}
          placeholderTextColor={themeConfig.colors.textDark}
          cursorColor={themeConfig.colors.primaryDark}
          onEndEditing={handleSearch}
          returnKeyType={'search'}
          returnKeyLabel={'search'}
        />
        {!!query && (
          <TouchableOpacity onPress={handleClose}>
            <Ionicons
              name={'close'}
              color={themeConfig.colors.primary}
              size={themeConfig.icons.medium}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons
            name={'search'}
            color={themeConfig.colors.primary}
            size={themeConfig.icons.medium}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: themeConfig.spacing.medium,
    columnGap: themeConfig.spacing.medium,
  },
  input: {
    flex: 1,
    borderColor: themeConfig.colors.textDark,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: themeConfig.colors.text,
  },
  close: {
    marginLeft: -themeConfig.icons.small * 2.5,
    marginRight: themeConfig.icons.small,
  },
})

export default SearchBar
