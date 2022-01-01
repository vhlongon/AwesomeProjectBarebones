import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ColorPalette from '../screens/ColorPalette';
import Home from '../screens/Home';
import { RootStackParamList } from '../types';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen
        component={ColorPalette}
        name="ColorPalette"
        options={({ route }) => ({
          title: `Color scheme - ${route.params?.name}`,
          presentation: 'modal',
        })}
      />
      <Stack.Screen component={TabNavigation} name="TabNavigation" />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
