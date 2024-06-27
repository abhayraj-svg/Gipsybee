import { View, Text,Image } from 'react-native'
import React from 'react'
import Homescreen from './Homescreen'
import Cartscreen from './Cartscreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profilescreen from './Profilescreen'

const Tab = createBottomTabNavigator()

export default function Tabhandler() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="homescreen" component={Homescreen} options={{
          tabBarIcon:()=>{
            return(
              <Image style={{height:25,width:25}} source={{uri:'https://tse3.mm.bing.net/th?id=OIP.9JiMFciLWANvUAXjt8cU7QHaFP&pid=Api&P=0&h=180'}}/>
            )
          },
          title:''}}/>
      <Tab.Screen name="cartscreen" component={Cartscreen} options={{
          tabBarIcon:()=>{
            return(
              <Image style={{height:25,width:25}} source={{uri:'https://tse3.mm.bing.net/th?id=OIP.XmclGYK68Dkt4evKvFZCrgHaHa&pid=Api&P=0&h=180'}}/>
            )
          },
          title:''}}/>
      <Tab.Screen name="profilescreen" component={Profilescreen} options={{
          tabBarIcon:()=>{
            return(
              <Image style={{height:25,width:25}} source={{uri:'https://tse4.mm.bing.net/th?id=OIP.oXzqq6dnQIUDZyv3Pha69QHaHa&pid=Api&P=0&h=180'}}/>
            )
          },
          title:''}}/>
      
    </Tab.Navigator>
  )
}