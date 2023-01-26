import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);

  const post = state.find((post) => post.id === id);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.edit}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  edit: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  view: {
    borderWidth: 2,
    borderColor: "gray",
    margin: 15,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default ShowScreen;
