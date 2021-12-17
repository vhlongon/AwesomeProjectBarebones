import { css } from 'styled-components/native';

export const boxShadow = (size: number) => css`
  shadow-color: black;
  shadow-offset: 1px;
  shadow-opacity: 0.3;
  shadow-radius: ${size}px;
  elevation: ${size};
`;
