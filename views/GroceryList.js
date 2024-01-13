import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { firebaseAuth } from "../firebase.js";
import DetailsPage from "./DetailsPage.js";

const GroceryList = ({ route, navigation: any }) => {
  console.log("beer");
  console.log(route.params.auth);

  return (
    <View style={styles.container}>
      <Text>Hallo, {route.params.auth.currentUser.email}!</Text>
      <Text style={styles.text}>
        Dit is mijn standaard React-component van de grocerylist!
        <Button onPress={() => firebaseAuth.signOut()} title="Logout" />
        <Button
          onPress={() => navigation.navigate("details")}
          title="Detail page"
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GroceryList;
