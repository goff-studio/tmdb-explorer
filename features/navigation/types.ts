import type { NavigatorScreenParams } from '@react-navigation/native'
import { Movie } from '../tmdb/types'

export enum Screens {
  Discovery = 'Discovery',
  Details = 'Details',
  Favorites = 'Favorites',
  Tabs = 'Tabs',
}

export type RootTabsParamList = {
  [Screens.Discovery]: undefined
  [Screens.Favorites]: undefined
}

export type RootStackParamList = {
  [Screens.Details]: { movie: Movie }
  [Screens.Tabs]: NavigatorScreenParams<RootTabsParamList>
}
