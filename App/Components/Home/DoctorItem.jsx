import { View, Text, Image } from 'react-native'
import React from 'react'

export default function DoctorItem({doctor}) {

    return (
        <View style={{width:200, borderRadius:10,  backgroundColor:'white', borderWidth:1, borderColor:'#d3d3d3', marginRight:10}}> 
          <Image 
          source = {{uri:doctor.attributes.Image}} 
          style={{width:'100%', height:110,borderTopLeftRadius:10,borderTopRightRadius:10,}}
          />
          <View style={{padding: 7,}}>
          <Text style={{fontSize: 16, fontFamily: "appfontmedium"}}>{doctor.attributes.Name}</Text>
          <Text style={{color:'gray'}}>{doctor.attributes.Address} </Text>
          </View>
        </View>
      )
}