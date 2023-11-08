import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import CustomButton from './components/common/UIButton/ClassicButton.jsx';
import * as Font from 'expo-font';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
      'Roboto-Black': require('./assets/fonts/Roboto-Bold.ttf'),
      'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
      'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
      'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
      'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
      'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });

    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <CustomButton label="Primary" onPress={() => alert('Primary Button Pressed')} />
      <CustomButton type="secondary" label="Secondary" onPress={() => alert('Secondary Button Pressed')} />
      <CustomButton type="outline" label="Outline" onPress={() => alert('Outline Button Pressed')} />
      <CustomButton size="small" label="Small" onPress={() => alert('Small Button Pressed')} />
      <CustomButton size="large" label="Large" onPress={() => alert('Large Button Pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Added background color for better visibility
  },
});

export default App;
