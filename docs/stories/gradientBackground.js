import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const basic = () => <LinearGradient colors={['red', 'blue']} style={styles.page} />;

export const withAngle = () => (
  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['red', 'blue']} style={styles.page} />
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
