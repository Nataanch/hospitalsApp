import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import {} from "react-native-gesture-handler";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import AppointmentCardItem from "../Components/Appointment/AppointmentCardItem";

export default function Appointment() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [appointmentList, setAppointmentList]= useState();
  
  const getUsersAppointments = () => {
    GlobalApi.getUserAppointments(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
     setAppointmentList(resp.data.data);
    //  console.log(appointmentList);
      }
    );
  };
useEffect(()=>{
  // console.log(user.firstName);
if(user.firstName){
  getUsersAppointments();
}
},[user])
  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={"My Appointments"} backButton={false} />
   <FlatList
   showsVerticalScrollIndicator={false}
   data={appointmentList}
   renderItem={({item})=> (
    <AppointmentCardItem appointment={item}/>
   )}
   />
    </View>
  );
}
