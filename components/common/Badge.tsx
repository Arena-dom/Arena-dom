import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

export default Badge;
