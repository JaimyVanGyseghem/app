import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import firebaseApp from "./firebase.js";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroceryList from "./views/GroceryList.js";
import Login from "./views/Login.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    // console.log("Firebase is geïnitialiseerd:", firebaseApp);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login ">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="GroceryList" component={GroceryList} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
