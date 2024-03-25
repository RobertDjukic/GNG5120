import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleGroceryList = () => {
    navigation.navigate('GroceryList');
  };

  const handleRecommendations = () => {
    navigation.navigate('Recommendations');
  };

  return (
    <View>
      <Button title="Grocery List" onPress={handleGroceryList} />
      <Button title="Recommendations" onPress={handleRecommendations} />
    </View>
  );
};

export default HomeScreen;
