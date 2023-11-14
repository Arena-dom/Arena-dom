import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    height: 40,
    borderRadius: 5,
  },
});

export default SearchBar;
