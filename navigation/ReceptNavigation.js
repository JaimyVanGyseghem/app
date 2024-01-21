import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddRecipePage from "../views/AddRecipePage.js";
import Recepts from "../views/Recepts.js";

const Stack = createNativeStackNavigator();

// mode="modal" screenOptions={{ headerShown: false }}
const ReceptNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Recepts"
      component={Recepts}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddRecipePage"
      component={AddRecipePage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ReceptNavigation;
