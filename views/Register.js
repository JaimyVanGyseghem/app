import React, { useState } from "react";
import { firebaseAuth, firebaseApp } from "../firebase.js";
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

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const auth = firebaseAuth;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(response);
      updateProfile(firebaseAuth.currentUser, { displayName: userName }).then(
        () => {
          console.log("rinche");
          console.log(firebaseAuth);
        }
      );
      alert("Check your emails!");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
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
