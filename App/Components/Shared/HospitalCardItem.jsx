import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { Ionicons } from '@expo/vector-icons';

export default function HospitalCardItem({ hospital }) {
  const web = hospital.attributes.Web;
//   console.log(hospital);
  // source={{uri:"https://res.cloudinary.com/dszcqivww/image/upload/v1698285667/main_building_kaplan_medical_centre_rehovot_a41817fa45.jpg"}}/>
  return (
    <View style={{marginTop:10, 
    backgroundColor:"white", 
    borderRadius:10}}>
    <Image style=
    {{ width: '100%', height: 140,
    borderTopLeftRadius:10, 
    borderTopRightRadius:10,}} 
    source={{ uri: web }} />
    
      {/* <Text>{hospital.attributes.Web}</Text> */}
   <View style={{padding: 10,
    
  }}>
   <Text style={{fontSize: 20, fontFamily: "appfontmedium"}}>{hospital.attributes.Name}</Text>
   <FlatList
   horizontal={true}
   data={hospital.attributes.categories.data}
   renderItem={({item})=> (
    <Text style={{
        marginRight:10,
        fontSize: 9, 
        color:'gray',
        fontFamily: "appfontmedium"}}> {item.attributes.Name}, </Text>
   )}
   
  
   />
   <View style=
   {{borderBottomWidth:1, 
    borderColor:Colors.adding,
    margin:10
    
}}/>
<View style={{flexDirection:'row', alignItems:'center',gap:4}}>
<Ionicons name="md-location-sharp" size={24} color={Colors.main} />
<Text>{hospital.attributes.Address}</Text>
</View>
<View style={{flexDirection:'row', 
alignItems:'center',gap:4,
marginTop:5
}}>
<Ionicons name="eye" size={22} color={Colors.main} />
<Text>{'685 street'}</Text>
</View>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({});
