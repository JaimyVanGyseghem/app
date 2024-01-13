import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate("Login")} title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Register"
      />
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

export default WelcomeScreen;
