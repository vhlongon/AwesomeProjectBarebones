import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Palette } from '../types';
import PalettePreview from '../components/PalettePreview';
import BaseScreen from './BaseScreen';
import { Button, FlatList, Text, View } from 'react-native';
import { useGetPalettes } from '../hooks/useGetPalettes';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const ErrorText = styled(Text)`
  background-color: red;
  padding: 10px;
  color: white;
`;

const spin = {
  0: {
    transform: [{ rotate: '0deg' }],
  },
  1: {
    transform: [{ rotate: '360deg' }],
  },
};

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Home = ({ navigation }: Props) => {
  const handlePress = (palette: Palette) => () => {
    navigation.navigate('ColorPalette', palette);
  };

  const { data, error, status } = useGetPalettes();

  if (status === 'loading') {
    return (
      <Container>
        <Text>Loading...</Text>
        <Animatable.View animation={spin} iterationCount="infinite">
          <MaterialCommunityIcons name="loading" size={52} />
        </Animatable.View>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorText>Error: {error.message}</ErrorText>
      </Container>
    );
  }

  return (
    <BaseScreen>
      <FlatList
        key={'colors-previews'}
        data={data}
        keyExtractor={item => `item-${item.id}`}
        renderItem={({ item }) => (
          <PalettePreview onPress={handlePress(item)} palette={item} />
        )}
      />
      <Button
        title="Go to Tab navigation"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </BaseScreen>
  );
};

export default Home;
