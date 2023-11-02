import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HospitalDoctorsListScreen from '../Screens/HospitalDoctorsListScreen';
import Home from '../Screens/Home';
import HospitalDetails from '../Screens/HospitalDetails';
import BookAppointment from '../Screens/BookAppointment';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
   <Stack.Navigator
   screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Hospital" component={HospitalDoctorsListScreen}/>
    <Stack.Screen name='hospital-detail' component={HospitalDetails}/>
    <Stack.Screen name='book-appointment' component={BookAppointment}/>
    </Stack.Navigator>
  )
}