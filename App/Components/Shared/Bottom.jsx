import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function Bottom({text,click}) {
  return (
    <TouchableOpacity
    onPress={()=> click()}
    style={{
      width:'95%',
      padding:13,
      backgroundColor:Colors.main,
      // marginTop:10,
      // marginBottom:10,
      margin:10,
      borderRadius:10,
     left:0,
     right:0,
     marginBottom:10,
     zIndex:20
    }}>
      <Text style={{
        color:'white',
        textAlign:'center',
        fontFamily:'',
        fontSize:17
      }}>{text}</Text>

    </TouchableOpacity>
  )
}