import { View, Text, Image } from "react-native";
import React from "react";
import HorizontalLine from "../Shared/HorizontalLine";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment/moment";
export default function AppointmentCardItem({ appointment }) {
  console.log(appointment.attributes.hospitals.data.attributes.Name);
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "#e5e5e5",
        borderRadius: 10,
        marginTop:5,
        backgroundColor:'white'
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "appfont", marginTop: 10 }}>
        {moment(appointment.attributes.data).format("MMMM Do YYYY")} - {appointment.attributes.time}
      </Text>
      <HorizontalLine />
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          gap: 10,
          alignItems: "center",
         
        }}
      >
        <Image
          style={{ width: 90, height: 100, borderRadius: 10 }}
          source={{
            uri: "https://th.bing.com/th/id/R.4cf252c3603906e7edd7ef4d791a282d?rik=52BXHrYKhcOTjw&riu=http%3a%2f%2fstatic.facegfx.com%2f2013%2fsweet-smiling-female-doctor-image-download_247526736.jpg&ehk=cp8UJ%2bsi72Po1AH%2bFInCoaHbqZYCzHPrbFjWtmzqJxU%3d&risl=&pid=ImgRaw&r=0",
          }}
        />
      
      <View>
        <Text style={{ fontSize: 16, fontFamily: "appfont" }}>
          {" "}
          {appointment.attributes.hospitals.data.attributes.Name}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Ionicons name="md-location-sharp" size={24} color={Colors.main} />
          <Text style={{ fontFamily: "appfont" }}>
            {appointment.attributes.hospitals.data.attributes.Address}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginTop: 5,
          }}
        >
          <MaterialCommunityIcons
            name="information"
            size={22}
            color={Colors.main}
          />
          <Text style={{ fontFamily: "appfont", color:'gray' }}>Id: #{appointment.id}</Text>
        </View>
      </View>
    </View>
    </View>
  );
}
