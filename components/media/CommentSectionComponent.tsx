import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

interface CommentSectionComponentProps {
  comments: string[];
  onCommentSubmit: (comment: string) => void;
}

const CommentSectionComponent: React.FC<CommentSectionComponentProps> = ({ comments, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput value={comment} onChangeText={setComment} placeholder="Leave a comment..." />
      <Button title="Submit" onPress={() => onCommentSubmit(comment)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for your comment section
  },
});

export default CommentSectionComponent;
