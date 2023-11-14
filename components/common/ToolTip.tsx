import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <View style={styles.tooltip}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltip: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

export default Tooltip;
