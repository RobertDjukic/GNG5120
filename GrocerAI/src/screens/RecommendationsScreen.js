import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import StoreList from '../components/StoreList';
import { getStoreRecommendations } from '../services/api'; // Assuming you have an API service

const RecommendationsScreen = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // Fetch store recommendations based on user's grocery list
    const groceryList = /* get grocery list from state or API */0; //NOT COMPLETED THIS PART***********************
    getStoreRecommendations(groceryList).then((data) => {
      setStores(data);
    });
  }, []);

  return (
    <View>
      <StoreList stores={stores} />
    </View>
  );
};

export default RecommendationsScreen;
