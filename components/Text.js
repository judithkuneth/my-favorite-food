import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const textStyles = StyleSheet.create({
  paragraph: { fontSize: 16, color: 'black' },
});

export const Paragraph = (props) => (
  <Text style={textStyles.paragraph}>{props.children}Hello World</Text>
);
