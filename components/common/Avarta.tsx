import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

interface AvatarProps {
  imageUrl?: string;
  initials?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, initials = 'U', size = 50 }) => {
    if (imageUrl) {
      return <Image source={{ uri: imageUrl }} style={{ width: size, height: size, borderRadius: size / 2 }} />;
    }
    return (
      <View style={[styles.avatarPlaceholder, { width: size, height: size, borderRadius: size / 2 }]}>
        <Text style={styles.text}>{initials}</Text>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  avatarPlaceholder: {
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Avatar;
