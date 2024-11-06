import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { themeConfig } from '../theme/themeConfig'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { CustomTabBarItem } from './CustomTabBarItem'
import { DefaultStyle } from 'react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes'

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets()

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(0) }],
    } as DefaultStyle
  })

  return (
    <Animated.View style={[styles.container, animatedStyle, { bottom: insets.bottom || 30 }]}>
      {state.routes.map((route, index) => (
        <CustomTabBarItem
          state={state}
          descriptors={descriptors}
          navigation={navigation}
          route={route}
          index={index}
          key={'tab-bar-item-' + index}
        />
      ))}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: '15%',
    right: '15%',
    flexDirection: 'row',
    backgroundColor: themeConfig.colors.backgroundBlack,
    borderRadius: themeConfig.spacing.medium,
  },
})

export default CustomTabBar
