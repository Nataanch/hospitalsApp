import { StyleSheet, Text, View, Image, TouchableOpacityBase, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalApi from "../../Services/GlobalApi";
import HospitalItem from "./HospitalItem";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PremiumHospital() {
  const [listHospitals, setListHospitals] = useState([]);

  const getPremiumHospitals = () => {
    GlobalApi.getPremiumHospitals().then((resp) => {
        setListHospitals(resp.data.data);
    });
  };
  const navigation=useNavigation();
  useEffect(() => {
    getPremiumHospitals();
  }, []);

  return (
    listHospitals && (
      <View styles={{ marginTop: 10 }}>
        <SubHeading subHeadingTitle={"Our premium Hospitals"} />
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={listHospitals}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={()=>
        navigation.navigate('hospital-detail',
        {
          hospital:item
        })}>
        <HospitalItem hospital={item} />
        </TouchableOpacity>}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({});
