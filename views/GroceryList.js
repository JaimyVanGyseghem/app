import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useStore } from "../store/States.js";

const GroceryList = ({ route, navigation }) => {
  const profileName = useStore((state) => state.profileName);

  return (
    <View style={styles.container}>
      <Text>{profileName}</Text>
      <Text style={styles.text}>
        Dit is mijn standaard React-component van de grocerylist!
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
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default GroceryList;
