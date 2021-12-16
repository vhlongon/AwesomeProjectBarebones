import React from 'react';
import {Text, View} from 'react-native';

import styled from 'styled-components/native';

enum Color {
  'Cyan' = '#2aa198',
  'Blue' = '#268bd2',
  'Magenta' = '#d33682',
  'Orange' = '#cb4b16',
}

const Item = styled(View)<{color: Color}>`
  background: ${({color}) => color};
  width: 100%;
  padding-vertical: 10px;
  margin-vertical: 5px;
  border-radius: 2.5px;
`;

const ItemText = styled(Text)`
  color: white;
  justify-content: center;
  text-align: center;
  font-weight: bold;
`;

interface Props {
  color: Color;
}

const ColorBox = ({color}: Props) => {
  const [colorName, colorValue] =
    Object.entries(Color).find(([, value]) => value === color) || [];

  return (
    <Item color={color}>
      <ItemText>
        {colorName} - {colorValue}
      </ItemText>
    </Item>
  );
};

export default ColorBox;
