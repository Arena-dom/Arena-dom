import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

interface ReelsVideoComponentProps {
  videoUri: string; // The URI of the video to play
}

const ReelsVideoComponent: React.FC<ReelsVideoComponentProps> = ({ videoUri }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode= {ResizeMode.COVER} // or "contain" to fit the video within the bounds of the player
        shouldPlay
        isLooping
        useNativeControls
        style={styles.video}
      />
      {/* Interactive components like like button and view count */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items in a row
    width: '100%', // Full width of the screen
    height: 200, // Smaller fixed height for a reel-like look
    marginBottom: 10, // Add space between reel items
    alignItems: 'center', // Center items vertically
  },
  video: {
    width: 150, // Adjust width as necessary
    height: '100%', // Full height of the container
    backgroundColor: 'black', // In case the video doesn't load, the container will still match the video color
  },
  // Add styles for InteractiveBarComponent if needed
});

export default ReelsVideoComponent;
