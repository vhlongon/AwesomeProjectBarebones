import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types';
import About from '../screens/About';
import TabHome from '../screens/TabHome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="TabHome"
      component={TabHome}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={32} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={({ route }) => {
        const name = route.params?.details?.name;
        return {
          title: `${name ? `About ${name}` : 'About page'}`,
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={32} />
          ),
        };
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
