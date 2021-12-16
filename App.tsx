import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen
          component={ColorPalette}
          name="ColorPalette"
          options={({ route }) => ({
            title: `Color scheme - ${route.params?.name}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
