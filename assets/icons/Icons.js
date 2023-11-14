import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Import other icon sets as needed

const Icon = ({ name, size, color, type }) => {
  switch (type) {
    case 'material':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'fontAwesome':
      return <FontAwesome name={name} size={size} color={color} />;
    // Add cases for other icon types
    default:
      return null;
  }
};

export default Icon;
