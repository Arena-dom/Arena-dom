// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme.js';

const ClassicButton = ({ type = 'primary', size = 'medium', label, onPress }) => {
  const buttonStyle = [
    styles.button,
    styles[type],
    styles[size],
  ];

  console.log('theme:', theme);

  
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  
  },
  primary: {
    backgroundColor: '#3498db',
   
  },
  secondary: {
    backgroundColor: '#3498db',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3498db',
  },
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: theme.fonts.bodyBold,

  },
});

export default ClassicButton;
