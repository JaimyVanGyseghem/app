import React, { useState } from "react";
import { firebaseAuth, fireStorage, fireStore } from "../firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import * as ImagePicker from "expo-image-picker";
import { collection, addDoc } from "firebase/firestore";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const auth = firebaseAuth;

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(firebaseAuth.currentUser, {
        displayName: userName,
        // photoURL: profilePicture,
      }).then(async () => {
        uploadImage(profilePicture);
      });
      alert("Check your emails!");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (uri) => {
    try {
      const storage = fireStorage;
      const filename = Date.now() + ".jpg"; // You can use any name here
      const storageRef = ref(storage, "profilePics/" + filename);
      const response = await fetch(uri);
      const blob = await response.blob();

      // images adden in collectie?
      // addDoc(collection(fireStore, "images"), {
      //   blob,
      // });

      // Upload the image
      await uploadBytes(storageRef, blob);
      // image download link van firebase
      const downloadableProfileImage = await getDownloadURL(storageRef);
      updateProfile(firebaseAuth.currentUser, {
        displayName: userName,
        photoURL: downloadableProfileImage,
      });
      console.log("Image uploaded successfully!");
      console.log(firebaseAuth);
      console.log(downloadableProfileImage);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfilePicture(result.uri);
      }
    } catch (error) {
      console.error("Error picking image", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register now!</Text>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={userName}
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(text) => setUserName(text)}
        ></TextInput>
        <Button
          title="Add a profile picture"
          onPress={() => pickImage()}
        ></Button>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        ></TextInput>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button title="Make account" onPress={() => signUp()}></Button>
        )}

        <Text>
          Or
          <Button onPress={() => navigation.navigate("Login")} title="Login" />
        </Text>
      </KeyboardAvoidingView>
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

export default Register;
