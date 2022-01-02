import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import SolidButton from '../components/SolidButton';
import { RootTabParamList } from '../types';
import BaseScreen from './BaseScreen';

const Container = styled(View)`
  margin: 10px;
`;

const Title = styled(Text)`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TabHome = () => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  return (
    <BaseScreen>
      <SafeAreaView>
        <Container>
          <Title>Choose one:</Title>
          <SolidButton
            onPress={() => {
              navigation.jumpTo('About', {
                details: { name: 'John Rambo', age: 42 },
              });
            }}
            title="Click to view Rambo details"
          />
          <SolidButton
            onPress={() => {
              navigation.jumpTo('About', {
                details: { name: 'Thor Odensson', age: 4000 },
              });
            }}
            title="Click to view Thors details"
          />
        </Container>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default TabHome;
