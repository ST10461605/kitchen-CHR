import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const ChefPage: React.FC = () => {
  const [dishes, setDishes] = useState<Array<{ name: string; description: string; price: string }>>([]);

  
  const sampleDishes = [
    { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish', price: 'R120' },
    { name: 'Grilled Chicken Salad', description: 'Healthy salad with grilled chicken', price: 'R80' },
    { name: 'Chocolate Cake', description: 'Rich and moist chocolate cake', price: 'R50' },
  ];

  
  const loadDishes = () => {
    setDishes(sampleDishes);
  };

  
  const removeDish = (index: number) => {
    const updatedDishes = dishes.filter((_, i) => i !== index);
    setDishes(updatedDishes);
    Alert.alert('Dish Removed', 'The selected dish has been removed.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chef Page</Text>
      <Button title="Load Dishes" onPress={loadDishes} color="gold" />

      {dishes.length === 0 ? (
        <Text style={styles.noDishesText}>No dishes available. Please load dishes.</Text>
      ) : (
        dishes.map((dish, index) => (
          <View key={index} style={styles.dishContainer}>
            <Text style={styles.dishText}>
              {dish.name} - {dish.description} - R{dish.price}
            </Text>
            <Button title="Remove" onPress={() => removeDish(index)} color="red" />
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gold',
  },
  noDishesText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  dishContainer: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  dishText: {
    color: 'white',
  },
});

export default ChefPage;
