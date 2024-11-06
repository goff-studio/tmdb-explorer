import React from 'react'
import { StyleSheet, Text as RNText, TextProps } from 'react-native'
import { themeConfig } from './themeConfig'

export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  return <RNText style={[styles.defaultStyle, style]} {...props} />
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: themeConfig.colors.text,
  },
})
