import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { firebaseAuth } from "../firebase.js";
import { useStore } from "../store/States.js";
import { useFirebaseStates } from "../store/FirestoreStates.js";

const SettingsPage = () => {
  const { deleteRecipeData } = useFirebaseStates();

  const signOut = async () => {
    firebaseAuth.signOut();
    deleteRecipeData();
  };

  const profilePicture = useStore((state) => state.profilePicture);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dit is de settings page!</Text>
      <Image style={styles.tinyLogo} source={{ uri: profilePicture }} />
      <Button onPress={() => signOut()} title="Logout" />
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

export default SettingsPage;
