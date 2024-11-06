import React from 'react'
import { StyleSheet, View } from 'react-native'
import { themeConfig } from './themeConfig'

type Props = {}

export const ListSeparator: React.FC<Props> = () => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    height: themeConfig.spacing.medium,
    width: themeConfig.spacing.medium,
  },
})
