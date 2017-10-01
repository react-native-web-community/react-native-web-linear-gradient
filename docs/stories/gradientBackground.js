import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default () => (
  <LinearGradient start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} colors={['red', 'blue']} style={styles.page}>
    <Text style={styles.buttonText}>Hello !</Text>
  </LinearGradient>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
