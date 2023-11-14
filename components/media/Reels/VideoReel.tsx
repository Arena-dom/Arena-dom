import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

interface VideoItem {
  id: string;
  uri: string;
}

interface VideoReelProps {
  videos: VideoItem[];
}

const VideoReel: React.FC<VideoReelProps> = ({ videos }) => {
  return (
    <View style={styles.container}>
      {videos.map(video => (
        <Video
          key={video.id}
          source={{ uri: video.uri }}
          style={styles.video}
          resizeMode="cover"
          repeat
          // Add other video properties as needed
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoReel;
