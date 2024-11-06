import React from 'react'
import { TmdbImage } from '../tmdb/TmdbImage'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { Movie } from '../tmdb/types'
import { StyleSheet } from 'react-native'
import { themeConfig } from '../theme/themeConfig'
import { LinearGradient } from 'expo-linear-gradient'
import { convertToRgba } from '../theme/utils'

type Props = {
  movie: Movie
  isBackdrop?: boolean
}

const GRADIENT_COLOR_A = convertToRgba(themeConfig.colors.backgroundDark, 0)
const GRADIENT_COLOR_B = themeConfig.colors.backgroundDark

export const Poster: React.FC<Props> = ({ movie, isBackdrop }) => {
  return (
    <Animated.View entering={FadeIn.duration(1000).delay(100)} exiting={FadeOut}>
      <TmdbImage style={styles.container} movie={movie} isBackdrop={!!isBackdrop} />
      <LinearGradient colors={[GRADIENT_COLOR_A, GRADIENT_COLOR_B]} style={styles.container} />
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: themeConfig.dimensions.screenWidth,
    height: themeConfig.dimensions.screenHeight / 2,
    flex: 1,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
})
