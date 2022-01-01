import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from '../screens/ColorPalette';
import Home from '../screens/Home';
import { MainStackParamList } from '../types';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator<MainStackParamList>();

const MainStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen component={Home} name="Home" />
    <Stack.Screen
      component={ColorPalette}
      name="ColorPalette"
      options={({ route }) => ({
        title: `Color scheme - ${route.params?.name}`,
      })}
    />
    <Stack.Screen component={TabNavigation} name="TabNavigation" />
  </Stack.Navigator>
);

export default MainStackNavigation;
