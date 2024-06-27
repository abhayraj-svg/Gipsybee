import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HeadScreen from './HeadScreen'
import Tabhandler from './Tabhandler'
import Showwidescreen from './Showwidescreen'

const stack = createNativeStackNavigator()

export default function MainStackscreenhandler() {
  return (
    <NavigationContainer >
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='headscreen' component={HeadScreen}/>
        <stack.Screen name='tabhandler' component={Tabhandler}/>
        <stack.Screen name='showwidescreen' component={Showwidescreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}