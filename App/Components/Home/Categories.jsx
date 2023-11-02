import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../Shared/Colors";
import SubHeading from "./SubHeading";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
const navigation = useNavigation();
const [categoryList, setCategoryList] = useState();
const getCategories = () => {
    GlobalApi.getCategories().then((resp) => {
      setCategoryList(resp.data.data);
      console.log(resp);
    });
  };
  useEffect(() => {
    getCategories();
  }, []);
  if (!categoryList) {
    return (
      <View>
        <Text>No data</Text>
      </View>
    );
  }
  return (
    <View style={{ marginTop: 10 }}>
  <SubHeading subHeadingTitle={"Doctor speciality"}/>

      <FlatList
        numColumns={4}
        // style={{ marginTop: 5 }}
        columnWrapperStyle={{
          flex: 1,

          justifyContent: "space-between",
        }}
        data={categoryList}
        renderItem={({ item, index }) =>
          index < 4 && (
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Hospital',
            {categoryName:item.attributes.Name}
            )}
           
           style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: Colors.mainLight,
                  padding: 15,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{ uri: item.attributes.Image.data.attributes.url }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    padding: 10,
                  }}
                />
              </View>
              <Text style={{ fontSize: 12, marginTop: 5 }}>
                {item.attributes.Name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
