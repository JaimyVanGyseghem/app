import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DetailsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Dit is mijn standaard React-component van de DetailsPage!
        <Button title="Maak gerecht" />
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

export default DetailsPage;
