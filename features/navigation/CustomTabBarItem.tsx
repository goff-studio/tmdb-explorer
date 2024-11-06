import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '../theme/Text'
import { themeConfig } from '../theme/themeConfig'

type Props = {
  state: any
  descriptors: any
  navigation: any
  route: any
  index: number
}

export const CustomTabBarItem: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
  route,
  index,
}) => {
  const { options } = descriptors[route.key]
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
        ? options.title
        : route.name

  const isFocused = state.index === index

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    })
  }

  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabButton}
    >
      <View style={[styles.tab, isFocused && styles.focusedTab]}>
        <Text style={[styles.label, isFocused && styles.focusedLabel]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
  },
  tab: {
    padding: themeConfig.spacing.medium,
    alignItems: 'center',
  },
  focusedTab: {
    backgroundColor: themeConfig.colors.primary,
    borderRadius: themeConfig.spacing.medium,
  },
  label: {
    color: themeConfig.colors.text,
  },
  focusedLabel: {
    color: themeConfig.colors.text,
  },
})
