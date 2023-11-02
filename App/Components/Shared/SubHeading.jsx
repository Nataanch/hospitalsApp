import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function SubHeading({subHeadingTitle,seeAll=true}) {
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        marginTop:10
    }}>
      <Text style={{
        fontFamily:"appfontmedium",
        fontSize:20
      }}>{subHeadingTitle}</Text>
      {seeAll? <Text style={{
        fontFamily:"appfont",
        color:Colors.main,
        fontSize:12,
        
      }} >
        See all
      </Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({})