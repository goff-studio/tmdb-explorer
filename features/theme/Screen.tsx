import React from 'react'
import { StatusBar, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'
import { themeConfig } from './themeConfig'

type Props = {
  contentStyle?: ViewStyle
  edges: Edge[]
  paddingHorizontal?: number
} & ViewProps

export const Screen: React.FC<Props> = ({
  children,
  contentStyle,
  paddingHorizontal = 0,
  edges,
  ...props
}) => {
  return (
    <SafeAreaView edges={edges} style={styles.container}>
      <View style={[contentStyle, { paddingHorizontal }]} {...props}>
        <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeConfig.colors.backgroundDark,
  },
  padding: {
    padding: themeConfig.spacing.medium,
  },
})
