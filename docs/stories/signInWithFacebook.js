import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const basic = () => (
  <TouchableOpacity>
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <Text style={styles.buttonText}>Sign in with Facebook</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export const withStartEndLocations = () => (
  <TouchableOpacity>
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5, 0.6]}
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}
    >
      <Text style={styles.buttonText}>Sign in with Facebook</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
