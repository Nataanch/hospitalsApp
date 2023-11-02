import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import Bottom from "./Bottom";

export default function DoctorCartItem({ doctor }) {

  const [mark, setMark]=useState(1);
  return (
    <View style={{ marginTop: 10, backgroundColor: "white", borderRadius: 10 }}>
      <Image
        style={{
          width: "100%",
          height: 300,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={{ uri: doctor.attributes.Image }}
      />

      {/* <Text>{hospital.attributes.Web}</Text> */}
      <View style={{ padding: 10 }}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{ fontSize: 20, fontFamily: "appfontmedium" }}>
          {doctor.attributes.Name}
        </Text>
        <TouchableOpacity onPress={()=>setMark(!mark)}>
        {mark? <Ionicons name="heart" size={24}  color={Colors.main} />: <Ionicons name="heart" size={24}  color='red' /> }
      
        </TouchableOpacity>
        
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.adding,
            margin: 10,
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Ionicons name="md-location-sharp" size={24} color={Colors.main} />
          <Text>{doctor.attributes.Address}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginTop: 10,
          }}
        >
        <FontAwesome name="vcard" size={22} color={Colors.main} />
        
          <Text>{doctor.attributes.About}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 10, }}>
          <Ionicons name="book" size={24} color={Colors.main} />
          <Text>{doctor.attributes.Year_of_expiriens} Years experience</Text>
        </View>
        <Bottom text="Make a Appointment" />
      </View>
    </View>
  );
}
