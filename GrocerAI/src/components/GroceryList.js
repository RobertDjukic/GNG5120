import React from 'react';
import { FlatList } from 'react-native';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GroceryItem name={item.name} price={item.price} />
      )}
    />
  );
};

export default GroceryList;
