import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from "./App/Components/SignInWithOAuth";
import Home from "./App/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
// import TabNavigation from "./App/Navigations/TabNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
import Colors from "./App/Shared/Colors";
import Appointment from "./App/Screens/Appointment";
import Profile from "./App/Screens/Profile";
import { useFonts } from 'expo-font';
import HomeNavigation from "./App/Navigations/HomeNavigation";
import Explores from "./App/Screens/Explores";
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Sora-Regular.ttf'),
    'appfontbold': require('./assets/fonts/Sora-Bold.ttf'),
    'appfontmedium': require('./assets/fonts/Sora-Medium.ttf'),
  });
if (!fontsLoaded){
  return null
}
  function MyTab() {
    return (
      
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 50,
              paddingHorizontal: 5,
              paddingTop: 5,
              paddingBottom: 5,
              // backgroundColor: Colors.mainLight,
              // position: 'absolute',
              borderTopWidth: 0,
         
            },
            tabBarActiveTintColor: Colors.main,
            tabBarInactiveTintColor: Colors.mainLight,
          }}
        >
          <Tab.Screen name="Home" 
          component={HomeNavigation}
          options={{
            title: "Home",
            tabBarIcon: () => <Ionicons name="home" size={23} color={Colors.main} />,
          }} 
          />
          <Tab.Screen
          name="Explore"
          component={Explores}
          options={{
          
            tabBarIcon: () => (
              <Ionicons 
              name="search" 
              size={24} color={Colors.main} />
            ),
          }}
        />
          <Tab.Screen name="Appointment" 
          component={Appointment}
          options={{
            title: "Appointment",
           
            tabBarIcon: () => <AntDesign name="calendar" size={23} color={Colors.main}/>,
          }} 
          />
       
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Main",
       
              tabBarIcon: () => <FontAwesome name="user"  size={23} color={Colors.main} />,
            }}
          />
        </Tab.Navigator>
   
    );
  }

  return (
    <ClerkProvider
      publishableKey={"pk_test_ZHJpdmluZy1ib2FyLTc1LmNsZXJrLmFjY291bnRzLmRldiQ"}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <SignedIn>
          <NavigationContainer>
            <MyTab />
          </NavigationContainer>
          {/* <TabNavigation/> */}
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    // justifyContent: "center",
  },
});
