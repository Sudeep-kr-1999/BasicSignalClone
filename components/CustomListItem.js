import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { db, query, onSnapshot, orderBy, collection } from "../firebase";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    let q = query(
      collection(db, "chats", id, "messages"),
      orderBy("timestamp", "desc")
    );
    let unsubscribe = onSnapshot(q, (querySnapshot) => {
      setChatMessages(querySnapshot.docs.map((doc) => doc.data()));
    });

    return unsubscribe;
  });
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "900" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}:{chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
