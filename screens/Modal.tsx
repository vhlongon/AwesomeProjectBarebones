import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import BaseScreen from './BaseScreen';
import AddPaletteForm from '../components/AddPaletteForm';

const Container = styled(View)`
  margin: 10px;
`;

const Modal = () => {
  return (
    <BaseScreen>
      <SafeAreaView>
        <Container>
          <AddPaletteForm />
        </Container>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default Modal;
