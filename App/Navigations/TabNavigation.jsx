import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../Screens/Home';
import Appointment from '../Screens/Appointment';
import Profile from '../Screens/Profile';
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from '../Shared/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import Explores from '../Screens/Explores';
import { FontAwesome5 } from '@expo/vector-icons';
const Tab = createBottomTabNavigator(); 
export default function TabNavigation() {
  return (
  
   <Tab.Navigator screenOptions={{
    headerShown:false,
    tabBarStyle: {
            height: 50,
            paddingHorizontal: 5,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: Colors.mainLight,
            // position: 'absolute',
            borderTopWidth: 0,
          },
    tabBarActiveTintColor: Colors.adding,
    tabBarInactiveTintColor: "gray",
   }}>
    <Tab.Screen
    name='Home' component={Home}
    />


<Tab.Screen
          name="Explore"
          component={Explores}
          options={{
            title: "Main",
            tabBarIcon: () => (
              <Ionicons 
              name="search" 
              size={24} color="black" />
            ),
          }}
        />


    <Tab.Screen
    name='Appointment' component={Appointment}
    />
    {/* <Tab.Screen
    name='Profile' component={Profile}
    /> */}
    <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Main",
            tabBarIcon: () => (
              <Ionicons 
                name="home"
                size={23}
              />
            ),
          }}
        />
        
   </Tab.Navigator>
 
  )
}

const styles = StyleSheet.create({})