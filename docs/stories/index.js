import React from 'react';

import { storiesOf } from '@storybook/react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

storiesOf('LinearGradient', module).add('simple', () => <LinearGradient colors={['red', 'blue']} />);
