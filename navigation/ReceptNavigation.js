import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsPage from "../views/DetailsPage.js";
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
      name="DetailsPage"
      component={DetailsPage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ReceptNavigation;
