import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { themeConfig } from './themeConfig'

type Props = {
  ionIconName: string
  size?: number
  onPress: () => void
}

export const CircleButton: React.FC<Props> = ({ size, onPress, ionIconName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[themeConfig.colors.primary, themeConfig.colors.primaryDark]}
        style={styles.container}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
      >
        <Ionicons
          name={ionIconName}
          size={size || themeConfig.icons.small}
          color={themeConfig.colors.text}
        />
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: 'white',
    padding: themeConfig.spacing.small,
  },
})
