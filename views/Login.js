import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { firebaseAuth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStore } from "../store/States.js";
import { useFirebaseStates } from "../store/FirestoreStates.js";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = firebaseAuth;
  const updateProfileName = useStore((state) => state.updateProfileName);
  const updateProfilePicture = useStore((state) => state.updateProfilePicture);
  const updateUserId = useFirebaseStates((state) => state.updateUserId);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      updateProfileName(response._tokenResponse.displayName);
      updateProfilePicture(response._tokenResponse.profilePicture);
      updateUserId(auth.currentUser.uid);
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login!</Text>

      <KeyboardAvoidingView behavior="padding">
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
          <Button title="Login" onPress={() => signIn()}></Button>
        )}
        <Text> Or </Text>
        <Button
          onPress={() => navigation.navigate("Register")}
          title="Register"
        />
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
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    width: "80%",
  },
});

export default Login;
