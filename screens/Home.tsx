import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  SolarizedColors,
  RootStackParamList,
  Color,
  RainbowColors,
  FrontendMastersColors,
} from '../types';
import NavigationItem from '../components/NavigationItem';
import BaseScreen from './BaseScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const getColorsFromEnum = (colors: Record<string, string>): Color[] =>
  Object.entries(colors).map(([key, value]) => ({
    value: value,
    name: key,
  }));

const Home = ({ navigation }: Props) => {
  const solarized = getColorsFromEnum(SolarizedColors);
  const rainbow = getColorsFromEnum(RainbowColors);
  const frontendMasters = getColorsFromEnum(FrontendMastersColors);

  return (
    <BaseScreen>
      <NavigationItem
        navigation={navigation}
        colorName="Solarized"
        colors={solarized}
      />
      <NavigationItem
        navigation={navigation}
        colorName="Rainbow"
        colors={rainbow}
      />
      <NavigationItem
        navigation={navigation}
        colorName="Frontend Masters"
        colors={frontendMasters}
      />
    </BaseScreen>
  );
};

export default Home;
