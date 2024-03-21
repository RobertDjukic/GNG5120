export const getStoreRecommendations = async (groceryList) => {
    // Implement API call to get store recommendations based on the grocery list
    // Example: const response = await fetch('https://api.example.com/recommendations', { method: 'POST', body: JSON.stringify(groceryList) });
    // const data = await response.json();
    // return data;
    return Promise.resolve([
      { id: 1, name: 'Store A', distance: 2, savings: 5 },
      { id: 2, name: 'Store B', distance: 30, savings: 3 },
      // ... more store data
    ]);
  };
  