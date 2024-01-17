import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useFirebaseStates } from "../store/FirestoreStates.js";

const Recepts = () => {
  const { data, setData } = useFirebaseStates();

  const handleAddData = () => {
    // Call the setData function to add data to Firestore
    const receptData = {
      Image: "path/to/image.jpg",
      Category: "Main",
      Ingredients: ["Flour", "Sugar", "Eggs"],
      Description: "A delicious dessert recipe.",
      Price: "$10.99",
      Time: "1 hour",
    };

    setData(receptData);
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dit zijn mijn recepten!</Text>
      <Button title="Add a recept" onPress={handleAddData} />
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
