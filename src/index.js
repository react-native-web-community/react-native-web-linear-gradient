import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
  return (
    <View style={[styles.container, props.style, { backgroundImage: `linear-gradient(to top, ${props.colors.join(',')})` }]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
});
