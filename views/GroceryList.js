import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GroceryList = ({ route, navigation }) => {
  console.log(navigation);
  console.log(route.params.auth);
  console.log(route.params.auth.currentUser.photoURL);
  return (
    <View style={styles.container}>
      <Text>Hallo, {route.params.auth.currentUser.displayName}!</Text>
      <Text>{route.params.auth.currentUser.photoURL}</Text>
      <Image
        source={{ uri: route.params.auth.currentUser.photoURL }} // vervang dit met de URL of het pad naar je afbeelding
        style={styles.image}
      />
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
