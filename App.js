/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Deck from './src/Deck';
import Home from './src/Home';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hme"
          component={Home}
          options={{ title: 'Choose Your Deck' }}
        />
        <Stack.Screen
          name="Deck"
          component={Deck}
          options={({ route }) => ({ title: route.params.type })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
