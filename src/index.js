import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        background: `linear-gradient(to top, ${props.colors.join(',')})`,
      }}
    >
      <View style={[styles.container, props.style]}>{props.children}</View>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
