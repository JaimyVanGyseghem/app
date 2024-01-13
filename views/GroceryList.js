import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GroceryList = ({ route, navigation }) => {
  console.log("appel");
  console.log(navigation);
  console.log(route.params.auth);

  return (
    <View style={styles.container}>
      <Text>Hallo, {route.params.auth.currentUser.email}!</Text>
      <Text style={styles.text}>
        Dit is mijn standaard React-component van de grocerylist!
        <Button
          onPress={() => navigation.navigate("DetailPage")}
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
