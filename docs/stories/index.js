import React from 'react';
import * as signInWithFacebook from './signInWithFacebook';
import * as gradientBackground from './gradientBackground';

import { storiesOf } from '@storybook/react';

storiesOf('Gradient background', module)
  .add('basic', gradientBackground.basic)
  .add('with an angle', gradientBackground.withAngle)
  .add('with an angle (legacy)', gradientBackground.withLegacyAngle);

storiesOf('Sign in with Facebook', module)
  .add('basic', signInWithFacebook.basic)
  .add('with start, end, locations', signInWithFacebook.withStartEndLocations);
