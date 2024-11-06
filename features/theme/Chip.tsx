import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from './Text'
import { themeConfig } from './themeConfig'

type Props = {
  label: string
}

export const Chip: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: themeConfig.colors.primaryDark,
    margin: 5,
  },
  label: {
    fontSize: 16,
  },
})
