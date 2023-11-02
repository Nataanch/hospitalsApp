import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { Ionicons } from '@expo/vector-icons';

export default function HorizontalLine() {
    return (
        
          <View
            style={{ borderBottomWidth: 1, 
                borderColor: Colors.mainLight, 
                marginTop: 10,
            marginBottom:10 }}
          />
          
        
      );
}