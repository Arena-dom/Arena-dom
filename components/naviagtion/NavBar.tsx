import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../common/Avarta'; // Ensure the path is correct
import SearchBar from '../common/SearchBar'; // Ensure the path is correct

interface NavBarProps {
  onProfilePress: () => void;
  onSearch: (text: string) => void;
  imageUrl?: string; // URL for the user's profile image
}

const NavBar: React.FC<NavBarProps> = ({ onProfilePress, onSearch, imageUrl }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState<string[]>([]);

const players = ['Lionel Messi', 'Cristiano Ronaldo', 'Neymar Jr', 'Kylian Mbappe', 'Robert Lewandowski'];
  const handleSearch = (text: string) => {
    console.log(`Searching for: ${text}`);
    onSearch(text); // Call the prop function

    const filtered = players.filter(player =>
        player.toLowerCase().includes(text.toLowerCase())
      );
  
      setFilteredPlayers(filtered);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onProfilePress}>
        <Avatar imageUrl={imageUrl} size={40} initials='LK' />
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search..." onChangeText={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default NavBar;
