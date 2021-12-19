import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { db, collection, addDoc } from "../firebase";
const AddChatScreen = ({ navigation }) => {
  const [input, setinput] = useState("");
  const createChat = async() => {
    try {
      const docRef = await addDoc(collection(db, "chats"), {
        chatName: input,
      });
      navigation.goBack();
    } catch (error) {
      alert(error);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat Name"
        value={input}
        onChangeText={(text) => setinput(text)}
        leftIcon={
          <Icon type="antdesign" name="wechat" size={24} color="black" />
        }
        onSubmitEditing={createChat}
      />
      <Button disabled={!input} onPress={createChat} title="Create Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
