import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function SubHeading({subHeadingTitle}) {
  return (
    <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom:10,
      marginTop:10
    }}
  >
    <Text style={{ fontSize: 20, fontFamily: "appfontmedium" }}>
     {subHeadingTitle}
    </Text>
    <Text
      style={{ fontSize: 14, fontFamily: "appfont", color: Colors.main }}
    >
      See All
    </Text>
  </View>
  )
}