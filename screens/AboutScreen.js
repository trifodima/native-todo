import React from 'react';
import {View} from 'react-native';
import { MonoText } from '../components/StyledText';

const AboutScreen = () => {
  return (
    <View>
      <MonoText>Todolist app</MonoText>
      <MonoText>version: 1.0.0</MonoText>
      <MonoText>created by: Trifonov Dmitry</MonoText>
    </View>
  );
};

export default AboutScreen;
