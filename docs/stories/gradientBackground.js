import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const basic = () => <LinearGradient colors={['red', 'blue']} style={styles.page} />;

export const withAngle = () => (
  <LinearGradient useAngle angle={135} colors={['red', 'blue']} style={styles.page} />
);

export const withLegacyAngle = () => (
  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['red', 'blue']} style={styles.page} />
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
