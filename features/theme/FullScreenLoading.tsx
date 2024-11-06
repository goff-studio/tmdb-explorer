import React from 'react'
import { ActivityIndicator } from 'react-native'
import { themeConfig } from './themeConfig'
import { FullScreenModal } from './FullScreenModal'

export const FullScreenLoading = () => {
  return (
    <FullScreenModal>
      <ActivityIndicator size="large" color={themeConfig.colors.primary} />
    </FullScreenModal>
  )
}
