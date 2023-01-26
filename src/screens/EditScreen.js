import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");

  const postToEdit = state.find((post) => post.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: postToEdit.title, content: postToEdit.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
      titleLabel={"Edit Title:"}
      contentLabel={"Edit Content:"}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
