import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  SolarizedColors,
  RootStackParamList,
  Color,
  RainbowColors,
  FrontendMastersColors,
  Palette,
} from '../types';
import PalettePreview from '../components/PalettePreview';
import BaseScreen from './BaseScreen';
import { FlatList } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const getColorsFor = (colors: Record<string, string>): Color[] =>
  Object.entries(colors).map(([key, value]) => ({
    value: value,
    name: key,
  }));

const allColors: Palette[] = [
  { name: 'Solarized', colors: getColorsFor(SolarizedColors) },
  { name: 'Rainbow', colors: getColorsFor(RainbowColors) },
  {
    name: 'Frontend Masters',
    colors: getColorsFor(FrontendMastersColors),
  },
];

const Home = ({ navigation }: Props) => {
  const handlePress = (palette: Palette) => () => {
    navigation.navigate('ColorPalette', palette);
  };

  return (
    <BaseScreen>
      <FlatList
        key={'colors-previews'}
        data={allColors}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PalettePreview onPress={handlePress(item)} palette={item} />
        )}
      />
    </BaseScreen>
  );
};

export default Home;
