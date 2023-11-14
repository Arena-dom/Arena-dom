import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Video from 'react-native-video';

// Define the type for the video data
type VideoData = {
    id: string;
    url: string;
};

// Define some dummy data for the videos
const videos: VideoData[] = [
    {
        id: '1',
        url: '../../../assets/videos/videoOne.mp4',
    },
    {
        id: '2',
        url: '../../../assets/videos/videoOne.mp4',
    },
    {
        id: '3',
        url: '../../../assets/videos/videoOne.mp4',
    },
];

// Define the VideoComponent
const VideoComponent = ({ url }: { url: string }) => {
    return (
        <View style={styles.videoContainer}>
            <Video
                source={{ uri: url }}
                style={styles.video}
                resizeMode="cover"
                repeat={true}
                muted={true}
            />
        </View>
    );
};

// Define the ReelsComponent
const ReelsComponent = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <VideoComponent url={item.url} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

// Define the styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    videoContainer: {
        height: 200,
        marginVertical: 10,
    },
    video: {
        flex: 1,
    },
});

// Export the ReelsComponent
export default ReelsComponent;

// To reuse the ReelsComponent in another component, simply import it and render it:
// import ReelsComponent from './components/media/Reels/ReelsComponent';
// ...
// <ReelsComponent />
