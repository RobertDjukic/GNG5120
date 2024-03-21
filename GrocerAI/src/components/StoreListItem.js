import React from 'react';
import { View, Text } from 'react-native';

const StoreListItem = ({ name, distance, savings }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{distance} km away</Text>
      <Text>Savings: ${savings}</Text>
    </View>
  );
};

export default StoreListItem;
