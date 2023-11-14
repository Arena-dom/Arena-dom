import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatsCardProps {
  playerName: string;
  stats: {
    goals: number;
    assists: number;
    matches: number;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ playerName, stats }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.playerName}>{playerName}</Text>
      <Text>Goals: {stats.goals}</Text>
      <Text>Assists: {stats.assists}</Text>
      <Text>Matches: {stats.matches}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  playerName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default StatsCard;
