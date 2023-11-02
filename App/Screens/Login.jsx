import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../../assets/image/Screen.jpeg";
import Colors from "../Shared/Colors";
import SignInWithOAuth from "../Components/SignInWithOAuth";
export default function Login() {
  return (
    <View style={{ alignItems: "center", backgroundColor: Colors.lightGray }}>
      <Image
        source={Screen}
        style={{ width: 300, height: 500, objectFit: "contain", marginTop: 50, borderColor:'#000', borderWidth: 2, borderRadius:20}}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 25,
          alignItems: "center",
          marginTop: -50,
        }}
      >
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book Appointment Effor
        </Text>
       <SignInWithOAuth/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    padding: 16,
    backgroundColor: Colors.main,
    borderRadius: 90,
    alignItems: "center",
    marginTop: 20,
    width: Dimensions.get("screen").width * 0.8,
  },
});
