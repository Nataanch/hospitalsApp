import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "../Shared/SubHeading";

import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import moment from "moment/moment";
import { StyleSheet } from "react-native";
import Colors from "../../Shared/Colors";
import PageHeader from "../Shared/PageHeader";
import { useNavigation } from "@react-navigation/native";
import Bottom from "../Shared/Bottom";
import { useUser } from "@clerk/clerk-expo";
import GlobalApi from "../../Services/GlobalApi";

export default function BookingSection({hospital}) {
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [notes, setNotes] = useState();
  const { isLoaded, isSignedIn, user } = useUser();
 
 
 
  const navigation = useNavigation();
  const handleBottom =()=> {
//   navigation.navigate('book-appointment',{hospital:hospital});
  bookAppointment();
}
  useEffect(() => {
    getDays();
    getTime();
  }, []);
  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 1; i < 7; i++) {
      const date = moment().add(i, "days");
      nextSevenDays.push({
        date: date,
        day: date.format("ddd"), //tue Mon
        formateDate: date.format("Do MMM"), //4th october
      });
    }
    setNext7Days(nextSevenDays);
  };
  const getTime = () => {
    const timeList = [];
    for (let index = 8; index <= 12; index++) {
      timeList.push({
        time: index + ":00 AM",
      });
      timeList.push({
        time: index + ":30 AM",
      });
    }
    for (let index = 1; index <= 6; index++) {
      timeList.push({
        time: index + ":00 PM",
      });
      timeList.push({
        time: index + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  const bookAppointment=()=>{
    const data={
        data:{
            userName:user.fullName,
            data:selectedDate,
            time:selectedTime,
            email: user.primaryEmailAddress.emailAddress,
            hospitals:hospital.id,
            note:notes


        },
       
    }
    GlobalApi.createAppointment(data).then(resp =>
        {
            console.log(resp);
        })
   
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          color: "gray",
        }}
      >
        Book Appointment
      </Text>
      <SubHeading subHeadingTitle={"Day"} seeAll={false} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={next7Days}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayBottom,
              selectedDate == item.date
                ? { backgroundColor: Colors.main }
                : null,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                {
                  fontFamily: "appfontmedium",
                },
                selectedDate == item.date ? { color: "white" } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                {
                  fontFamily: "appfontmedium",
                  fontSize: 16,
                },
                selectedDate == item.date ? { color: "white" } : null,
              ]}
            >
              {item.formateDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Time"} seeAll={false} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={timeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayBottom,
              {
                paddingVertical: 15,
              },
              selectedTime == item.time
                ? { backgroundColor: Colors.main }
                : null,
            ]}
            onPress={() => setSelectedTime(item.time)}
          >
            <Text
              style={[
                {
                  fontFamily: "appfontmedium",
                  fontSize: 16,
                },
                selectedTime == item.time ? { color: "white" } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Note"} seeAll={false} />

      <TextInput
        numberOfLines={3}
        onChangeText={(value)=> setNotes(value)}
        style={{
          backgroundColor: '#e5e5e5',
          padding: 20,
          borderRadius: 10,
          borderColor: Colors.main,
          borderWidth: 1,
          textAlignVertical:'top'
        }}
        placeholder="Write Notes Heare"
      />
      <Bottom click={handleBottom} text = {"Make Appointment"}/>
    </View>
  );
}
const styles = StyleSheet.create({
  dayBottom: {
    borderRadius: 99,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    borderColor: Colors.main,
  },
});
