import styled from 'styled-components/native';
import { Color } from '../types';
import { boxShadow } from './styles';

const ColorSwatch = styled.View<{ color: Color; size?: number }>`
  width: ${({ size }) => size ?? 50}px;
  height: ${({ size }) => size ?? 50}px;
  background-color: ${({ color }) => color.value};
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 2.5px;
  ${boxShadow(4)};
`;

export default ColorSwatch;
