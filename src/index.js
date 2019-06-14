import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class LinearGradient extends PureComponent {
  static defaultProps = {
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

  state = {
    width: 1,
    height: 1,
  };

  measure = ({ nativeEvent }) =>
    this.setState({
      width: nativeEvent.layout.width,
      height: nativeEvent.layout.height,
    });

  getColors = () =>
    this.props.colors
      .map((color, index) => {
        const location = this.props.locations[index];
        let locationStyle = '';
        if (location) {
          locationStyle = ' ' + location * 100 + '%';
        }
        return color + locationStyle;
      })
      .join(',');

  render() {
    const {
      start,
      end,
      colors,
      locations,
      angle,
      style,
      children,
      ...otherProps
    } = this.props;
    return (
      <View
        {...otherProps}
        style={[
          style,
          {
            backgroundImage: `linear-gradient(${angle}deg,${this.getColors()})`
          },
        ]}
        onLayout={this.measure}
      >
        {children}
      </View>
    );
  }
}
