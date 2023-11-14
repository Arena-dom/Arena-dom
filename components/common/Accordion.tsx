import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <Text>{title}</Text>
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8',
    padding: 10,
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Accordion;
