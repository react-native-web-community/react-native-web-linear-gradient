import { setOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';
import centered from './decorator-centered';

addDecorator(centered);

setOptions({
  name: 'Linear Gradient',
  url: 'https://react-native-web-community.github.io/react-native-web-linear-gradient',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  downPanelInRight: false
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
