// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme.js';
import { colors } from '../../../constants/Colors/colors.js';
import {sizes}   from '../../../constants/Sizes/sizes.js'


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
    backgroundColor: colors.accent,
   
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
    fontSize: sizes.fontXL,
    fontFamily: theme.fonts.bodyBold,

  },
});

export default ClassicButton;
