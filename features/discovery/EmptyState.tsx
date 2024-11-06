import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { themeConfig } from '../theme/themeConfig'
import { Text } from '../theme/Text'
import { View } from 'react-native'

type Props = {
  message?: string
}
export const EmptyState: React.FC<Props> = ({ message }) => {
  return (
    <View
      style={{
        height: themeConfig.dimensions.screenHeight / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ionicons
        name={'sad-outline'}
        size={themeConfig.icons.large}
        color={themeConfig.colors.primary}
      />
      <Text>{message || 'Oh! Noooo'}</Text>
    </View>
  )
}
