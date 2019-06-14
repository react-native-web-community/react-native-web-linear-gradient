import React from 'react';
import { View } from 'react-native';

const LinearGradient = ({
  start,
  end,
  colors,
  locations,
  angle,
  style,
  children,
  ...otherProps
}) => {
  getColors = () =>
    colors.map((color, index) => {
        const location = this.props.locations[index];
        let locationStyle = '';
        if (location) {
          locationStyle = ' ' + location * 100 + '%';
        }
        return color + locationStyle;
      })
      .join(',');

  return (
    <View
      {...otherProps}
      style={[
        style,
        {
          backgroundImage: `linear-gradient(${angle}deg,${this.getColors()})`
        },
      ]}
    >
      {children}
    </View>
  );
}

LinearGradient.defaultProps = {
  start: {
    x: 0.5,
    y: 0,
  },
  end: {
    x: 0.5,
    y: 1,
  },
  locations: [],
  colors: [],
  useAngle: false,
  angle: 45
};
