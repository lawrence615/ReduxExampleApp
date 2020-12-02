import React from 'react'
import { Text, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import FriendsScreen from '../screens/FriendsScreen'

import Colours from '../constants/Colours'

const tabScreenConfig = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-home' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colours.primaryColour,
      tabBarLabel:'Home'
    }
  },
  Friends: {
    screen: FriendsScreen,
    navigationOptions: {
      tabBarLabel: 'Friends',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-people' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colours.accentColour
    }
  }
}

const AppTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true
  })
  : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      // labelStyle:{
      //   fontFamily:'open-sans'
      // },
      activeTintColor: Colours.accentColour
    }
  })

  export default createAppContainer(AppTabNavigator)