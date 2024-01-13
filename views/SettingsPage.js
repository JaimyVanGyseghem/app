import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { firebaseAuth } from "../firebase.js";

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dit is de settings page!</Text>
      <Button onPress={() => firebaseAuth.signOut()} title="Logout" />
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

export default SettingsPage;
