import React from 'react';
import Home from './containers/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store/store';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Native Todo App' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
