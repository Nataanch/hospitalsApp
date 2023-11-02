import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import HospitalCardItem from "../Shared/HospitalCardItem";
import { useNavigation } from "@react-navigation/native";
import DoctorCartItem from "../Shared/DoctorCartItem";

export default function DoctorBigList({ doctorList }) {
    console.log(doctorList);
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={doctorList}
        renderItem={({ item }) => (
          <TouchableOpacity
          // onPress={()=> navigation.navigate('hospital-detail',
          // {
          //   doctor:item
          // }) }
          >
            
            <DoctorCartItem doctor={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
