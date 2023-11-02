import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import { SearchBar } from "react-native-screens";
import Search from "../Components/Home/Search";
import Slider from "../Components/Home/Slider";
import Categories from "../Components/Home/Categories";
import PremiumHospital from "../Components/Home/PremiumHospital";
import AllDoc from "../Components/Home/AllDoc";

export default function Home() {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <ScrollView style={{ flex: 1, padding: 20, marginTop: 25}}>
      <Header />
      <Search setSearchText={(value) => console.log(value)} />
      <Slider />
      <Categories/>
      <PremiumHospital/>
<AllDoc/>
      {/* <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      ></Button> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
