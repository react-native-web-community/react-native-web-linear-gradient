import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import signInWithFacebook from './signInWithFacebook';
import gradientBackground from './gradientBackground';

import { storiesOf } from '@storybook/react';

storiesOf('LinearGradient', module)
.add('signInWithFacebook', signInWithFacebook)
.add('gradientBackground', gradientBackground);
