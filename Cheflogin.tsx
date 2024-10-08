import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChefLogin: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 

  const handleLogin = () => {
    if (email === 'Thubilelhlekoza@gmail.com' && password === '2004VC') {
      console.log('Login successful');
      navigation.navigate('ChefPage'); // Navigates to the Chefpage
    } else {
      Alert.alert('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="gray"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="gray"
      />
      
      <Button title="Login" color="gold" onPress={handleLogin} />
    </View>
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
    marginBottom: 30,
    textAlign: 'center',
    color: 'gold',
  },
  input: {
    height: 50,
    borderColor: 'gold',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
});

export default ChefLogin;