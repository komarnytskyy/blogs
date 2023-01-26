import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogPostForm = ({
  titleLabel,
  contentLabel,
  onSubmit,
  initialValues,
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>{titleLabel}</Text>
      <TextInput
        value={title}
        onChangeText={(value) => setTitle(value)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <Text style={styles.label}>{contentLabel}</Text>
      <TextInput
        value={content}
        onChangeText={(value) => setContent(value)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
    padding: 5,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 10,
  },
});

export default BlogPostForm;
