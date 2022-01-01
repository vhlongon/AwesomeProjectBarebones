import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RootTabParamList } from '../types';
import BaseScreen from './BaseScreen';

const Container = styled(View)`
  margin: 10px;
`;

const Title = styled(Text)`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

type Props = BottomTabScreenProps<RootTabParamList, 'About'>;

const About = ({ ...props }: Props) => {
  const { details } = props.route.params || {};

  const detailsList =
    details && Object.entries(details).map(([key, value]) => ({ key, value }));

  return (
    <BaseScreen>
      <SafeAreaView>
        <Container>
          {detailsList ? (
            <>
              <Title>Details:</Title>
              <FlatList
                data={detailsList}
                renderItem={({ item }) => (
                  <Text>
                    {item.key}: {item.value}
                  </Text>
                )}
              />
            </>
          ) : (
            <Text>No Details</Text>
          )}
        </Container>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default About;
