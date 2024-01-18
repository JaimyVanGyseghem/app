import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroceryList from "./views/GroceryList.js";
import WelcomeScreen from "./views/WelcomeScreen.js";
import Recepts from "./views/Recepts.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import SettingsPage from "./views/SettingsPage.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase.js";
import ReceptNavigation from "./navigation/ReceptNavigation.js";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (x) => {
      if (x) {
        setUser(x);
      } else {
        setUser(null);
      }
    });
  }, []);

  function InsideLayout() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="ReceptNavigation" component={ReceptNavigation} />
        <Tab.Screen name="GroceryList" component={GroceryList} />
        <Tab.Screen name="SettingsPage" component={SettingsPage} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
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
