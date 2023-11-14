import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface RankingListProps {
  rankings: Array<{
    playerName: string;
    rank: number;
  }>;
}

const RankingList: React.FC<RankingListProps> = ({ rankings }) => {
  return (
    <FlatList
      data={rankings}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{item.playerName}</Text>
          <Text>Rank: {item.rank}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default RankingList;
