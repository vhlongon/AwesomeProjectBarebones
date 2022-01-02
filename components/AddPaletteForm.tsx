import React, { useState } from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { FlatList, Switch, Text, View } from 'react-native';
import styled from 'styled-components/native';
import uuid from 'react-native-uuid';
import { Color, MainStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import colorsData from '../colorsData';
import SolidButton from './SolidButton';
import ColorSwatch from './ColorSwatch';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type FormData = {
  colors: Color[];
  paletteName: string;
};

const FormContainer = styled(View)`
  height: 100%;
`;

const List = styled(FlatList)`
  margin-vertical: 10px;
`;

const ListItem = styled(View)`
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-vertical: 5px;
`;

const ColorContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const ColorText = styled(Text)`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  border: 1px solid black;
  padding: 10px;
  margin-vertical: 10px;
`;

const ErrorText = styled(Text)`
  color: red;
  font-weight: bold;
  margin-vertical: 2.5px;
`;

const AddPaletteForm = () => {
  const {
    control,
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { colors: [], paletteName: '' },
  });
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleChooseColor = (color: Color) => (selected: boolean) => {
    const newSelectedColors = selected
      ? [...selectedColors, color]
      : selectedColors.filter(c => c.name !== color.name);
    setValue('colors', newSelectedColors);
    setSelectedColors(newSelectedColors);

    if (newSelectedColors.length < 3) {
      setError('colors', {
        type: 'required',
        message: 'Please select at least 3 colors',
      });
    } else {
      clearErrors('colors');
    }
  };

  const onSubmit = (data: FormData) => {
    const id = uuid.v4() as string;

    navigation.navigate('Home', {
      id,
      colors: data.colors,
      name: data.paletteName,
    });
  };

  return (
    <FormContainer>
      <Text>Choose colors for palette</Text>
      <Controller
        control={control}
        rules={{
          required: 'this field is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Palette name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="paletteName"
      />
      {errors.paletteName && (
        <ErrorText>{errors.paletteName.message}</ErrorText>
      )}
      <List
        {...register('colors', {
          validate: {
            required: v => {
              if ('length' in v) {
                return v.length >= 3 || 'Please select at least 3 colors';
              } else {
                return 'Please select at least 3 colors';
              }
            },
          },
        })}
        key={'colors-previews'}
        data={colorsData}
        keyExtractor={item => (item as Color).name}
        renderItem={({ item }) => {
          const color = item as Color;
          const isSelected = Boolean(
            selectedColors.find(c => c.name === color.name),
          );
          return (
            <ListItem>
              <ColorContainer>
                <ColorSwatch color={color} size={32} />
                <ColorText>{color.name}</ColorText>
              </ColorContainer>
              <Switch
                onValueChange={handleChooseColor(color)}
                value={isSelected}
              />
            </ListItem>
          );
        }}
      />
      {errors.colors && (
        <ErrorText>
          {(errors.colors as unknown as FieldError).message}
        </ErrorText>
      )}
      <SolidButton title="Submit" onPress={handleSubmit(onSubmit)} />
    </FormContainer>
  );
};

export default AddPaletteForm;
