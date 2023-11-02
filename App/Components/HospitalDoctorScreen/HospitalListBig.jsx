import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import HospitalCardItem from '../Shared/HospitalCardItem'
import { useNavigation } from '@react-navigation/native'


//need to display list of hospitals
export default function HospitalListBig({hospitalList}) {
    // console.log(hospitalList);
    const navigation = useNavigation();
  return (
    <View style={{marginTop:15}}>
      <FlatList
      data={hospitalList}
      renderItem={({item})=>
    <TouchableOpacity
    onPress={()=> navigation.navigate('hospital-detail',
    {
      hospital:item
    }) }
    >
     <HospitalCardItem hospital={item}/></TouchableOpacity>}
      
      />
       
    </View>
  )
}