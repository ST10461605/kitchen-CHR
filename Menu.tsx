import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [dishName, setDishName] = useState<string>(''); 
  const [description, setDescription] = useState<string>(''); 
  const [price, setPrice] = useState<string>(''); 
  const [dishes, setDishes] = useState<Array<{ category: string; name: string; description: string; price: string }>>([]);

  // Function to add dish
  const addDish = () => {
    if (selectedCategory && dishName && description && price) {
      const newDish = { category: selectedCategory, name: dishName, description, price };
      setDishes([...dishes, newDish]);  // Add new dish to the list
      // Reset the input fields
      setSelectedCategory('');
      setDishName('');
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill all fields');
    }
  };

  // Function to remove dish
  const removeDish = (index: number) => {
    const updatedDishes = dishes.filter((_, i) => i !== index);  // Remove dish at specific index
    setDishes(updatedDishes);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.menuText}>Restaurant Menu</Text>

        {/* Picker for selecting menu category */}
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Select a category" value="" />
          <Picker.Item label="Starter" value="starter" />
          <Picker.Item label="Main Meal" value="mainMeal" />
          <Picker.Item label="Dessert" value="dessert" />
        </Picker>

        {/* Input for Name of the Dish */}
        <TextInput
          style={styles.input}
          placeholder="Name of the Dish"
          placeholderTextColor={'white'}
          value={dishName}
          onChangeText={setDishName}
        />

        {/* Input for Description */}
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor={'white'}
          value={description}
          onChangeText={setDescription}
          multiline
        />

        {/* Input for Price */}
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor={'white'}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        {/* Add Button */}
        <Button title="Add Dish" onPress={addDish} color="gold" />

        {/* Display the list of added dishes */}
        {dishes.map((dish, index) => (
          <View key={index} style={styles.dishContainer}>
            <Text style={styles.dishText}>
              {dish.category}: {dish.name} - {dish.description} - R{dish.price}
            </Text>
            <Button title="Remove" onPress={() => removeDish(index)} color="red" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black', // Scrollable background
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',  
  },
  menuText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'gold',  
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    color: 'white',  
    backgroundColor: '#222', 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',  
    backgroundColor: '#333',  
    borderRadius: 5,
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
  footerText: {
    color: 'orange',
    fontSize: 22,
  },
});

export default Menu;

