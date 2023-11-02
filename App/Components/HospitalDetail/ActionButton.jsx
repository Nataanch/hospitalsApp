import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
export default function ActionButton() {

const actionButtonList =[
    {
        id:1,
        name:'Website',
        icon:'earth'
    },
    {
        id:2,
        name:'Email',
        icon:'chatbubble-ellipses'
    },
    {
        id:3,
        name:'Phone',
        icon:'md-call'
    },
    {
        //<Ionicons name="phone-portrait-sharp" size={24} color="black" />
        id:4,
        name:'Direction',
        icon:'map'
    },
    {
        id:5,
        name:'Share',
        icon:'download'
    },
]


  return (
    <View style={{marginTop:15}}>
    <FlatList 
    data={actionButtonList}
columnWrapperStyle={{
    flex:1,
    justifyContent:'space-between'
}}
    numColumns={5}
    renderItem={({item})=>(
        <TouchableOpacity style={{alignItems:'center',
       }}>
            <View 
            style={{backgroundColor:Colors.mainLight,
            padding:13,
            borderRadius:99,
            alignItems:'flex-start'

            }}>
            <Ionicons name={item.icon} size={23} color={Colors.main}/>   
         
            </View>
            <Text style={{fontFamily:"appfontmedium", marginTop:5}}>{item.name}</Text>
        </TouchableOpacity>
    )}
    />
    </View>
  )
}

const styles = StyleSheet.create({})