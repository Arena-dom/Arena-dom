import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  size?: 'small' | 'medium' | 'large';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

const Card: React.FC<CardProps> = ({ children, style, size = 'medium', align = 'stretch' }) => {
  return <View style={[styles.card, sizeStyles[size], alignStyles[align], style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3, // for Android
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  // Other styles...
});

const sizeStyles = StyleSheet.create({
  small: { width: 150, height: 150 },
  medium: { width: 250, height: 250 },
  large: { width: 350, height: 350 },
});

const alignStyles = StyleSheet.create({
  'flex-start': { alignItems: 'flex-start' },
  'flex-end': { alignItems: 'flex-end' },
  center: { alignItems: 'center' },
  stretch: { alignItems: 'stretch' },
  baseline: { alignItems: 'baseline' },
});

export default Card;
