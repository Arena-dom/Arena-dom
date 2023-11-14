import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

interface VideoItemProps {
  uri: number;
}

const VideoItem: React.FC<VideoItemProps> = ({ uri }) => {
  return (
    <View style={styles.videoContainer}>
      <Video
        source={uri}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay={false}
        isLooping
        
        useNativeControls
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%', // Adjust the width as needed
    height: 200,   // Adjust the height as needed
    marginBottom: 20, // Add space between videos
    backgroundColor: 'black', 
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoItem;
