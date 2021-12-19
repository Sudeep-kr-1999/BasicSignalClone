import React from "react";
import { useState, useLayoutEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Text } from "react-native-elements";
import { Button } from "react-native-elements";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName:name,
          photoURL:
            imageUrl ||
            "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setname(text)}
        />

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setpassword(text)}
        />

        <Input
          placeholder="Profile Pic URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setimageUrl(text)}
        />
      </View>
      <Button
        title="Register"
        onPress={register}
        raised
        containerStyle={styles.button}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: { width: 200, marginTop: 10 },
});
