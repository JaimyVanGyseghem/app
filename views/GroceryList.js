import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useStore } from "../store/States.js";
import { useFirebaseStates } from "../store/FirestoreStates.js";

const GroceryList = ({ route, navigation }) => {
  const profileName = useStore((state) => state.profileName);
  const { data, setData } = useFirebaseStates();
  const handleAddData = () => {
    // Call the setData function to add data to Firestore
    setData("Hello, Firestore hohe!");
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <Text>{profileName}</Text>
      <Text>Data in Firestore: {data?.id}</Text>
      <Button title="Add Data to Firestore" onPress={handleAddData} />
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
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default GroceryList;
