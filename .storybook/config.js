import { configure, addDecorator } from '@storybook/react';

import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from '../src/utils/theme';
addDecorator(withThemesProvider(theme));

// automatically import all files ending in *.stories.js
const req = require.context('../src/ui', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
