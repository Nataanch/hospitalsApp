import { View, Text, Image } from 'react-native'
import React from 'react'

export default function HospitalItem({hospital, image}) {
    // console.log(hospital.data.attributes.image.data[0].attributes.url);
    // console.log(hospital.attributes.image.data[0].attributes.url);
  return (
    <View style={{width:300, 
    borderRadius:10, 
    backgroundColor:'white',
    borderWidth:1,
     borderColor:'#d3d3d3', 
    marginRight:10}}> 
      <Image 
      source = {{uri:hospital.attributes.Web3}} 
      style={{width:'100%', height:110,borderTopLeftRadius:10,borderTopRightRadius:10,}}
      />
      <View style={{padding: 7,}}>
      <Text style={{fontSize: 16, fontFamily: "appfontmedium"}}>{hospital.attributes.Name} </Text>
      <Text style={{color:'gray'}}>{hospital.attributes.Address} </Text>
      </View>
    </View>
  )
}