import { Dimensions } from 'react-native'

const colors = {
  primary: '#EF233C',
  primaryDark: '#9b1727',
  text: '#FFFFFF',
  textDark: '#A8A9AB',
  background: '#272B31',
  backgroundDark: '#1B1D1F',
  backgroundBlack: '#000000',
}

const icons = {
  small: 16,
  medium: 24,
  large: 32,
}

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
}

const dimensions = {
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
}
export const themeConfig = {
  colors,
  icons,
  dimensions,
  spacing,
}
