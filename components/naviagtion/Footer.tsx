import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // or any other icon library

interface FooterProps {
  onIconPress: (screenName: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onIconPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => onIconPress('Home')}>
        <MaterialIcons name="home" size={25} color="grey" />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>
      {/* Repeat for other icons: Friends, Marketplace, Notifications, Menu */}
      {/* ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 10,
    marginTop: 2,
  },
});

export default Footer;
