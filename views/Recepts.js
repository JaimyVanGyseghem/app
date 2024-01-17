import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Recepts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dit zijn mijn recepten!</Text>
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

export default Recepts;
