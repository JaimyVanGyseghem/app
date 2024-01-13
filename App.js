import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import firebaseApp from "./firebase.js";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroceryList from "./views/GroceryList.js";
import Login from "./views/Login.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase.js";

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
        <Tab.Screen
          name="GroceryList"
          component={GroceryList}
          initialParams={user}
        />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login ">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="Login" component={Login} />
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
