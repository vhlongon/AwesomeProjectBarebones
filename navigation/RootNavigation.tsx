import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import MainStackNavigation from './MainStackNavigation';
import Modal from '../screens/Modal';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          component={MainStackNavigation}
          name="MainStack"
          options={{ headerShown: false, title: 'Main' }}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen component={Modal} name="Modal" />
      </RootStack.Group>
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
