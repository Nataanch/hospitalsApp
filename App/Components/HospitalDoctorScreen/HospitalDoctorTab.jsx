import { View, Text,TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { StyleSheet } from "react-native";
import Colors from "../../Shared/Colors";

export default function HospitalDoctorTab({activeTab}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity 
        style={[
            activeIndex == 0 ? 
            styles.inActiveTab: 
            styles.activeTab
        ]}
        onPress={() => {setActiveIndex(!activeIndex); activeTab('Hospital')}}>
          <Text
            style={[activeIndex == 0 ? styles.activeText : styles.inActiveText]}
          >
            Hospital
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
         style={[
            activeIndex == 1 ?  styles.activeTab:
            styles.inActiveTab
           
        ]}
        onPress={() => {setActiveIndex(!activeIndex);activeTab('Doctor')}}>
          <Text
            style={[activeIndex == 1 ? styles.activeText : styles.inActiveText]}
          >
            Doctors
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  activeText: {
    color: Colors.main,
    textAlign: "center",
    fontSize: 18,
  },
  inActiveText: {
    color: Colors.mainLight,
    textAlign: "center",
    fontSize: 18,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.mainLight,
    padding: 3,
    
  },
  inActiveTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.mainLight,
    padding: 3,
  
  },
});
