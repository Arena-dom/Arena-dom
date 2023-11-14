import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../components/naviagtion/NavBar'; // Assuming NavBar.tsx is in the same directory
import Footer from '../../components/naviagtion/Footer'; // Assuming Footer.tsx is in the same directory
import ReelsVideoComponent from '../../components/media/ReelsVideoComponent'; // Assuming ReelsVideoComponent.tsx is in the same directory
import InteractiveBarComponent from '../../components/media/InteractiveBarComponent'; 
import VideoItem from '../../components/media/VideoItem';// Assuming InteractiveBarComponent.tsx is in the same directory
import ReelsComponent from '../../components/media/Reels/ReelsComponent'


// Mock Data
/*
const videosReels = [
  { id: '1', videoId: 'YqmbJnH_z0' },
  { id: '2', videoId: 'iaAQk_8LPQzz6A75'},
  { id: '3', videoId: 'iaAQk_8LPQzz6A75' },
  { id: '4', videoId: 'iaAQk_8LPQzz6A75' },
  // Add more videos
];

*/




const videos = [
  { id: '1', uri: require('../../assets/videos/videoOne.mp4'), likes: 10, views: 100 },
  { id: '2', uri: require('../../assets/videos/videoTwo.mp4'), likes: 20, views: 200 },
  { id: '3', uri: require('../../assets/videos/videoThree.mp4'), likes: 30, views: 300 },
  // ... add more video items as required
];

const fetchVideos = async () => {
  // Logic to fetch video data
};


const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab in NavBar
  const [video_reel, setVideos] = useState([]);

  const handleProfilePress = () => {
    console.log('Profile Icon Pressed');
  };

  // useEffect(() => {
  //   fetchVideos().then(data => setVideos(data));
  // }, []);

 

  const handleSearch = (text: string) => {
    console.log('Search:', text);
  };

  const handleFooterIconPress = (screenName: string) => {
    console.log(`Navigate to: ${screenName}`);
    // Implement navigation logic here
  };

  const renderItem = ({ item }: { item: typeof videos[0] }) => (
    <View>
      <VideoItem uri={item.uri} />
      <InteractiveBarComponent likes={item.likes} views={item.views} onLikePress={() => {}} onRecommendPress={() => {}} />
    </View>
  );


  return (
    <View style={styles.container}>
      <NavBar onProfilePress={() => {}} onSearch={() => {}} />
     
    
      
      <FlatList
        contentContainerStyle={{ alignItems: 'stretch' }}
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Footer onIconPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
   
  },

  reelsContainer: {
    height: 300, // Adjust the height as needed for the reels
    width: 200,
  },
});

export default HomeScreen;
