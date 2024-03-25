import React from 'react';
import { FlatList } from 'react-native';
import StoreListItem from './StoreListItem';

const StoreList = ({ stores }) => {
  return (
    <FlatList
      data={stores}
      keyExtractor={(store) => store.id.toString()}
      renderItem={({ item }) => (
        <StoreListItem name={item.name} distance={item.distance} savings={item.savings} />
      )}
    />
  );
};

export default StoreList;
