import { View, Text, Image } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import HorizontalLine from "../Shared/HorizontalLine";

export default function AppointmentHospitalInfo({ hospital }) {
  console.log(hospital.attributes.Web);
  return (
    <View>
      <PageHeader title={"Book Appointment"} />
      <View style={{ marginTop: 10,
      flexDirection:'row', gap:5, alignItems:'center'
     }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 99,
          }}
          source={{ uri: hospital.attributes.Web }}
        />
        <View>
          <Text style={{
          
                fontSize: 20,
                fontFamily: "appfontmedium",
              }}>{hospital.attributes.Name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: 10,
            }}
          >
            <Ionicons name="md-location-sharp" size={24} color={Colors.main} />
            <Text
              style={{ fontSize: 16, 
                fontFamily: "appfont", 
                color: "gray",
                width:"70%"
             }}
            >
             {hospital.attributes.Address}
            </Text>
          </View>
          <HorizontalLine/>
        </View>
    
      </View>
    </View>
  );
}
