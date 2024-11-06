import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList, RootTabsParamList, Screens } from './types'
import { createStackNavigator } from '@react-navigation/stack'
import DiscoveryScreen from '../discovery/DiscoveryScreen'
import { MovieDetailsScreen } from '../movies/MovieDetailsScreen'
import FavoritesScreen from '../favorites/FavoritesScreen'
import CustomTabBar from './CustomTabBar'

const Tab = createBottomTabNavigator<RootTabsParamList>()
const Stack = createStackNavigator<RootStackParamList>()

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={Screens.Discovery} component={DiscoveryScreen} />
      <Tab.Screen name={Screens.Favorites} component={FavoritesScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.Tabs} component={Tabs} />
        <Stack.Screen name={Screens.Details} component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
