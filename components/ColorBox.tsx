import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Color } from '../types';
import tinycolor from 'tinycolor2';

const Item = styled(View)<{ color: Color }>`
  background: ${({ color }) => color};
  padding: 10px;
  margin-vertical: 5px;
  border-radius: 2.5px;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
`;

const ItemText = styled(Text)<{ color: Color }>`
  color: ${({ color }) => (tinycolor(color).isDark() ? 'white' : 'black')};
  justify-content: center;
  text-align: center;
  font-weight: bold;
`;

interface Props {
  color: Color;
}

const ColorBox = ({ color }: Props) => {
  const [colorName, colorValue] =
    Object.entries(Color).find(([, value]) => value === color) || [];

  return (
    <Item color={color}>
      <ItemText color={color}>
        {colorName} - {colorValue}
      </ItemText>
    </Item>
  );
};

export default ColorBox;
