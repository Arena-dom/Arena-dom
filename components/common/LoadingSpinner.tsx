import React from 'react';
import { View, ActivityIndicator, StyleSheet, ViewStyle, StyleProp } from 'react-native';

interface LoadingSpinnerProps {
  size?: 'small' | 'large';
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'large', color = '#0000ff', style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;
