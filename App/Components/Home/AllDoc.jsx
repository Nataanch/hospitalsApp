import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalApi from "../../Services/GlobalApi";
import HospitalItem from "./HospitalItem";
import { FlatList } from "react-native";
import DoctorItem from "./DoctorItem";

export default function AllDoc() {
    const [listDocs, setListDocs] = useState([]);

    const getAllDocs = () => {
      GlobalApi.getAllDoctors().then((resp) => {
        setListDocs(resp.data.data);
      });
    };
    useEffect(() => {
        getAllDocs();
    }, []);
  
    return (
        listDocs && (
        <View styles={{ marginTop: 10, marginBottom:10 }}>
          <SubHeading subHeadingTitle={"Our Doctors"} />
          <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={listDocs}
          renderItem={({ item }) => <DoctorItem doctor={item} />}
          />
        </View>
      )
    );
}