import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../types';
import BaseScreen from './BaseScreen';

const Container = styled(View)`
  margin: 10px;
`;

type Props = BottomTabScreenProps<RootStackParamList, 'Modal'>;

const Modal = (props: Props) => {
  console.log('Modal props:', props);

  return (
    <BaseScreen>
      <SafeAreaView>
        <Container>
          <Text>Modal</Text>
        </Container>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default Modal;
