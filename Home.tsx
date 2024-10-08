import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Menu from './Menu';
import ChefLogin from './Cheflogin';
import ChefPage from './ChefPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home', headerStyle: { backgroundColor: 'black' }, headerTintColor: '#D4AF37' }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ title: 'Restaurant Menu', headerStyle: { backgroundColor: 'black' }, headerTintColor: '#D4AF37' }} 
        />
        <Stack.Screen 
          name="ChefLogin" 
          component={ChefLogin} 
          options={{ title: 'Chef Login', headerStyle: { backgroundColor: 'black' }, headerTintColor: '#D4AF37' }} 
        />
        <Stack.Screen 
          name="ChefPage" 
          component={ChefPage} 
          options={{ title: 'Chef Page', headerStyle: { backgroundColor: 'black' }, headerTintColor: '#D4AF37' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
