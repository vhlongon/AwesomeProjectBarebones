export type RootStackParamList = {
  Home: undefined;
  ColorPalette?: { colors: Color[]; name: string };
};

export enum SolarizedColors {
  'Base03' = '#002b36',
  'Base02' = '#073642',
  'Base01' = '#586e75',
  'Base00' = '#657b83',
  'Base0' = '#839496',
  'Base1' = '#93a1a1',
  'Base2' = '#eee8d5',
  'Base3' = '#fdf6e3',
  'Yellow' = '#b58900',
  'Orange' = '#cb4b16',
  'Red' = '#dc322f',
  'Magenta' = '#d33682',
  'Violet' = '#6c71c4',
  'Blue' = '#268bd2',
  'Cyan' = '#2aa198',
  'Green' = '#859900',
}

export enum RainbowColors {
  'Red' = '#FF0000',
  'Orange' = '#FF7F00',
  'Yellow' = '#FFFF00',
  'Green' = '#00FF00',
  'Violet' = '#8B00FF',
}

export enum FrontendMastersColors {
  'Red' = '#c02d28',
  'Black' = '#3e3e3e',
  'Grey' = '#8a8a8a',
  'White' = '#ffffff',
  'Orange' = '#e66225',
}

export type Color = {
  name: string;
  value: string;
};
