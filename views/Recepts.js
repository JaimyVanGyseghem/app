import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { useFirebaseStates } from "../store/FirestoreStates.js";

const Recepts = ({ route, navigation }) => {
  const { data, setData } = useFirebaseStates();
  const [modalVisible, setModalVisible] = useState(false);

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
      <Button
        onPress={() => navigation.navigate("DetailsPage")}
        title="Add a recept"
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Recepts;
