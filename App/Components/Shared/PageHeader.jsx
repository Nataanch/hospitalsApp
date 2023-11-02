import { View, Text,TouchableOpacity  } from 'react-native'
import React from 'react'


import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

//<Ionicons name="arrow-back-circle-outline" size={24} color="black" />
export default function PageHeader({title, backButton=true}) {
    const navigation=useNavigation();
  return (
    <View style={{flexDirection:'row',
    gap:5,alignItems:'center', marginTop:10, marginBottom:10}}>
    {backButton ? 
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Ionicons name="arrow-back-circle-outline" size={37} color={Colors.main} />
    </TouchableOpacity>:null}
    <Text style={{ fontSize: 25, fontFamily:'appfontbold' }}>{title}</Text>
    </View>
  )
}