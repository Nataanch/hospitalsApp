import { StyleSheet, Text, View, FlatList, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import image1 from "../../../assets/image/img1.png";
import image2 from "../../../assets/image/img2.png";
import GlobalApi from "../../Services/GlobalApi";

export default function Slider() {
    const [sliderList, setSliderList] = useState();
//   const sliderList = [
//     { id: 1, name: "Slider 1", image: image1 },
//     { id: 2, name: "Slider 2", image: image2 },

// ];

useEffect(()=>{ 
    getSlider();
     }, [])

// useEffect=(()=> {
// getSlider();
// }, [])
const getSlider=()=> {
    GlobalApi.getSlider().then(resp => {
      
        setSliderList(resp.data.data)
    })
}
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
      data={sliderList}
      horizontal={true}
      renderItem={({item}) => (
        <Image source={{uri:item.attributes.Image.data.attributes.url}}  
        style={{
        width:Dimensions.get('screen').width*0.9,
        height:170,
        borderRadius:10,
        marginRight:10
     
    }} 
        
        />
       
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
