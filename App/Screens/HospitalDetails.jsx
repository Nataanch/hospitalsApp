import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalInfo from "../Components/HospitalDetail/HospitalInfo";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../Shared/Colors";
import Bottom from "../Components/Shared/Bottom";
export default function HospitalDetails() {
  const [hospital, setHospital] = useState();
  const param = useRoute().params;
  const image = param.hospital.attributes.Web2;
  const navigation = useNavigation();
  const handleBottom =()=> {
  navigation.navigate('book-appointment',{hospital:hospital});
  }
  useEffect(() => {
    if (param) {
      setHospital(param.hospital);
      console.log(param.hospital.attributes.Web2);
    }
  }, []);
  return hospital&&(
    <View style={{flex:1,backgroundColor:'white'}}>
      <ScrollView style={{backgroundColor:'white'}}>
      <View
        style={{
          position: "absolute",
          margin: 15,
          zIndex: 10,
        }}
      >
        <PageHeader
          title={""}
          style={{
            zIndex: 20,
          }}
        />
      </View>

      <View>
        <Image style={{ width: "100%", height: 260 }} source={{ uri: image }} />
        <View style={{marginTop:-20, 
            backgroundColor:'white',
            borderTopLeftRadius:20,
            borderTopRightRadius:20, 
            padding:20
             }}>
          <HospitalInfo hospital={hospital}/>
        </View>
      </View>
      
      </ScrollView>
      <Bottom click={handleBottom} text = {"Book Appointment"}/>
      {/* <TouchableOpacity
      style={{
        width:'100%',
        padding:13,
        backgroundColor:Colors.mainLight,
        margin:10,
        borderRadius:99,
       left:0,
       right:0,
       marginBottom:10,
       zIndex:20
      }}>
        <Text style={{
          color:'white',
          textAlign:'center',
          fontFamily:'',
          fontSize:17
        }}>Book Appointment</Text>

      </TouchableOpacity> */}

    </View>
  );
}
