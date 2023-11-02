import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons'; 

//<Ionicons name="notifications-outline" size={24} color="black" />
export default function Header() {
  //hook use user ot klerk - poluhit dannie ot usera
  const { isLoaded, isSignedIn, user } = useUser();
  //user.fullName - eto login s google
  //NE RABOTAET!! - (!isLoaded || !isSignIn)
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <View style={{ display: "flex", 
    flexDirection: "row", 
    alignItems:'center', justifyContent:'space-between' }}>
      <View style={{ display: "flex", 
      flexDirection: "row", gap: 7, 
      alignItems:'center' }}>
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{fontFamily:'appfont'}}>Hello,👋</Text>
          <Text style={{ fontSize: 18,  fontFamily:'appfontbold' }}>
            {user.fullName}
          </Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" 
      size={28} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({});
