import React from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import { themeConfig } from './themeConfig'

export const FullScreenModal = ({ children }) => {
  return (
    <Animated.View style={styles.container} entering={FadeIn} exiting={FadeOut}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: themeConfig.dimensions.screenWidth,
    height: themeConfig.dimensions.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeConfig.colors.backgroundDark,
  },
})
