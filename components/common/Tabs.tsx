import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, ViewStyle, StyleProp } from 'react-native';

interface TabProps {
  tabs: string[]; // Array of tab names
  onTabPress: (tabIndex: number) => void; // Function to call when a tab is pressed
  activeTab?: number; // Index of the currently active tab
  style?: StyleProp<ViewStyle>; // Optional styling for the tab bar
}

const Tabs: React.FC<TabProps> = ({ tabs, onTabPress, activeTab = 0, style }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.tabBar, style]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, activeTab === index && styles.activeTab]}
          onPress={() => onTabPress(index)}
        >
          <Text style={[styles.tabText, activeTab === index && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tab: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tabText: {
    color: 'grey',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  activeTabText: {
    color: 'blue',
  },
});

export default Tabs;
