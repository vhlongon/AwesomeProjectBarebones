export type RootStackParamList = {
  MainStack: undefined;
  Modal?: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  ColorPalette?: { colors: Color[]; name: string };
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

export type Palette = {
  id: number;
  name: string;
  colors: Color[];
};
