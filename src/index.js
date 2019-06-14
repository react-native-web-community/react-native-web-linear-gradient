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
  const getColors = () => {
    if (locations.length) {
      return colors.map((color, i) => `${color} ${locations[i] * 100}%`)
    }
    return colors
  }

  return (
    <View
      {...otherProps}
      style={[
        style,
        {
          backgroundImage: `linear-gradient(${angle}deg,${getColors().join(',')})`
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

export default LinearGradient
