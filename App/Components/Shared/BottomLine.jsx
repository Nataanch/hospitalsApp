import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { Ionicons } from '@expo/vector-icons';
export default function BottomLine({address}) {
  return (
    <View>
      <View
        style={{ borderBottomWidth: 1, 
            borderColor: Colors.mainLight, 
            marginTop: 10 }}
      />
      <View style={{ flexDirection: "row", 
      alignItems: "center", gap: 4,
      marginTop:10
       }}>
        <Ionicons name="md-location-sharp" size={24} color={Colors.main} />
        <Text style={{fontSize:16,
        fontFamily:'appfont',
        color:'gray'}}>{address}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Ionicons name="time-sharp" size={23} color={Colors.main} />
        <Text style={{fontSize:16,
        fontFamily:'appfont',
        color:'gray'}}>Mon Sun | 11AM - 8PM</Text>
      </View>
      <View
        style={{ borderBottomWidth: 1, 
            borderColor: Colors.mainLight, 
            marginBottom: 15,
            marginTop:10
         }}
      />
    </View>
  );
}
