import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalDoctorTab from "../Components/HospitalDoctorScreen/HospitalDoctorTab";
import HospitalListBig from "../Components/HospitalDoctorScreen/HospitalListBig";
import GlobalApi from "../Services/GlobalApi";
import { ActivityIndicator } from "react-native";
import Colors from "../Shared/Colors";
import DoctorBigList from "../Components/HospitalDoctorScreen/DoctorBigList";
export default function HospitalDoctorsListScreen() {
  //PARAMETRI IZ NAVIGAZII S HUKOM USEROUTE -PASS CATEGORY NAME
  const param = useRoute().params;
const [activeTab,setActiveTab]= useState('Hospital');
  const [hospitalList, setHospitalList]=useState([]);
  const [doctorList, setDoctorList] = useState([]);
  // console.log(hospitalList);
  const getHospitalListByCategory = () => {
    GlobalApi.getHospitalsByCategory(param?.categoryName).then(resp => {
      setHospitalList(resp.data.data);
  
    });
  };
  const getDoctorListByCategory = ()=> {
    GlobalApi.getDoctorsByCategory(param?.categoryName).then(resp =>{
      setDoctorList(resp.data.data)
      const attributes = resp.data.data;
      // console.log(resp.data.data);
    })
  }

  useEffect(()=> {
    getHospitalListByCategory();
    getDoctorListByCategory();
  },[])
  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />
      <HospitalDoctorTab  activeTab={(value)=> setActiveTab(value)}/>
      {!hospitalList.length ? 
      <ActivityIndicator size={'large'} 
      color={Colors.main}
      style={{marginTop:"50%"}}
      />:
      activeTab =='Hospital' ? <HospitalListBig hospitalList={hospitalList} />: 
      !doctorList.length ? 
      <ActivityIndicator size={'large'} 
      color={Colors.main}
      style={{marginTop:"50%"}}
      />:
      <DoctorBigList doctorList={doctorList} />}
      
      
    </View>
  );
}
