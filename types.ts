export type Palette = {
  id: number | string;
  name: string;
  colors: Color[];
};

export type RootStackParamList = {
  MainStack: undefined;
  Modal?: undefined;
};

export type MainStackParamList = {
  Home?: Palette;
  ColorPalette?: Palette;
  TabNavigation: undefined;
};

export type RootTabParamList = {
  TabHome: undefined;
  About?: { details: { name: string } & Record<string, string | number> };
};

export type Color = {
  name: string;
  value: string;
};
