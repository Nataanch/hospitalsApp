import { StyleSheet, Text, View, FlatList} from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { Ionicons } from '@expo/vector-icons';
import BottomLine from "../Shared/BottomLine";
import ActionButton from "./ActionButton";
import PageHeader from "../Shared/PageHeader"
import SubHeading from "../Shared/SubHeading";
import HorizontalLine from "../Shared/HorizontalLine";
export default function HospitalInfo({ hospital }) {
  console.log(hospital.attributes.Name);
  //   {hospital.attributes.Name}
  ///Description
  return (
    hospital && (
      <View>
        <Text style={{ fontSize: 23, fontFamily: "appfontbold" }}>
          {hospital.attributes.Name}
        </Text>
        <FlatList
          horizontal={true}
          data={hospital.attributes.categories.data}
          renderItem={({ item }) => (
            <Text
              style={{
                marginRight: 10,
                fontSize: 12,
                color: "gray",
                fontFamily: "appfontmedium",
              }}
            >
              {" "}
              {item.attributes.Name},{" "}
            </Text>
          )}
        />
        <HorizontalLine/>
       <BottomLine address={hospital.attributes.Address}/>
       <ActionButton/>
       <View
        style={{ borderBottomWidth: 1, 
            borderColor: Colors.mainLight, 
            marginTop: 15 }}
      />
     <SubHeading subHeadingTitle={'About'}/>
        <Text>{hospital.attributes.Description}</Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({});
