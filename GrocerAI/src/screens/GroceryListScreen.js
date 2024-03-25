import React from 'react';
import { View } from 'react-native';
import GroceryList from '../components/GroceryList';

const GroceryListScreen = () => {
  // You can manage grocery list state and data here
  const groceryItems = [
    { id: 1, name: 'Apples', price: 1.99 },
    { id: 2, name: 'Bananas', price: 0.99 },
    { id: 3, name: 'Milk', price: 2.49 },
    // Add more grocery items
  ];

  return (
    <View>
      <GroceryList items={groceryItems} />
    </View>
  );
};

export default GroceryListScreen;
