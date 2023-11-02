import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import HospitalDoctorTab from '../Components/HospitalDoctorScreen/HospitalDoctorTab'
import { useRoute } from '@react-navigation/native';
import DoctorBigList from '../Components/HospitalDoctorScreen/DoctorBigList';
import HospitalListBig from '../Components/HospitalDoctorScreen/HospitalListBig';
import Colors from '../Shared/Colors';
import GlobalApi from '../Services/GlobalApi';

export default function Explores() {
   
    const [activeTab,setActiveTab]= useState('Hospital');
    const [hospitalList, setHospitalList]=useState([]);
    const [doctorList, setDoctorList] = useState([]);
 
    const getHospitalList = () => {
        GlobalApi.getAllHospital().then(resp => {
          setHospitalList(resp.data.data);
      
        });
      };
      const getDoctorList = ()=> {
        GlobalApi.getAllDoctors().then(resp =>{
          setDoctorList(resp.data.data)
          const attributes = resp.data.data;
          // console.log(resp.data.data);
        })
      }
    
      useEffect(()=> {
        activeTab=='Hospital'?
        getHospitalList():
        getDoctorList()
      ;
      },[activeTab])
 
 
 
 
 
    return (
    <View style={{padding:20}}>
      <Text style={{
        fontSize:26,
        fontFamily:'appfontmedium'
      }}>Explores</Text>

      <HospitalDoctorTab activeTab={(value)=> setActiveTab(value)}/>
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
  )
}