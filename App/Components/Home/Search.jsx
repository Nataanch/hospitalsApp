import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

//<Ionicons name="search-circle-sharp" size={24} color="black" />
export default function Search({setSearchText}) {
    const [searchInput,setSearchInput]=useState();
  return (
    <View style={{ marginTop: 15 }}>
      <View style={{display:'flex',
    flexDirection:'row',
    gap:5, alignItems:'center',
    borderWidth:1,
    padding:8,
    borderColor:Colors.mainLight,
    borderRadius:8}}>
        <Ionicons name="search-circle-sharp" size={24} color={Colors.main} />
        <TextInput placeholder="Search"
        onChangeText={(value)=> setSearchInput(value)}
        onSubmitEditing={()=>setSearchText(searchInput)} 
        style={{width:'100%'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
