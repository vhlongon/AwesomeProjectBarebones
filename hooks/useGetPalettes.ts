import { useQuery } from 'react-query';
import { Palette } from '../types';

interface PaletteResponse {
  id: number;
  paletteName: string;
  colors: Color[];
}

interface Color {
  colorName: string;
  hexCode: string;
}

const handleFetch = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return response.ok
    ? response.json()
    : Promise.reject({
        status: response.status,
        message:
          response.statusText ||
          'Something went wrong trying to fetch palettes',
      });
};

const fetchPalettes = async (): Promise<Palette[]> => {
  const palettes = await handleFetch<PaletteResponse[]>(
    'https://color-palette-api.kadikraman.now.sh/palettes',
  );

  return palettes.map(({ paletteName, colors, id }) => ({
    id,
    name: paletteName,
    colors: colors.map(({ colorName, hexCode }) => ({
      name: colorName,
      value: hexCode,
    })),
  }));
};

export const useGetPalettes = () => {
  return useQuery<Palette[], Error>(['palettes'], fetchPalettes);
};
