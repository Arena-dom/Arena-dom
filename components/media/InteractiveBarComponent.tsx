import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface InteractiveBarComponentProps {
  likes: number;
  views: number;
  onLikePress: () => void;
  onRecommendPress: () => void;
}

const InteractiveBarComponent: React.FC<InteractiveBarComponentProps> = ({ likes, views, onLikePress, onRecommendPress }) => {
  return (
    <View style={styles.bar}>
      <TouchableOpacity onPress={onLikePress} style={styles.buttonContainer}>
        <MaterialIcons name="thumb-up" size={15} />
        <Text  style={styles.likesText}>{likes}</Text>
      </TouchableOpacity>
      <Text>{views} Views</Text>
      <TouchableOpacity onPress={onRecommendPress}>
        <Text>Recommend</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flex: 2,
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 20,
    // Remove one of the alignItems properties
  },
  buttonContainer: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically
    // Add additional styling as needed
  },
  likesText: {
    marginLeft: 5, // Add some spacing between the icon and the text
    // Add additional styling as needed
  },
});

export default InteractiveBarComponent;
