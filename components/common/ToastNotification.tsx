import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';

interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
  duration?: number; // Duration in milliseconds
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, isVisible, duration = 3000 }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, duration);
    }
  }, [isVisible, fadeAnim, duration]);

  return (
    <Animated.View style={[styles.toast, { opacity: fadeAnim }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default ToastNotification;
