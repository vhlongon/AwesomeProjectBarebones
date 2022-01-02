import React from 'react';
import { View, Button, GestureResponderEvent } from 'react-native';
import styled from 'styled-components';

const SolidButtonWrapper = styled(View)<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  margin-vertical: 10px;
  padding: 2.5px;
`;

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  bgColor?: string;
  color?: string;
}
const SolidButton = ({
  onPress,
  title,
  bgColor = '#007aff',
  color = '#fff',
}: Props) => (
  <SolidButtonWrapper bgColor={bgColor}>
    <Button color={color} onPress={onPress} title={title} />
  </SolidButtonWrapper>
);

export default SolidButton;
