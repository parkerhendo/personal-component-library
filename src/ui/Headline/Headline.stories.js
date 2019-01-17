import React from 'react';

import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../utils/theme';

import Headline from './index';
const stories = storiesOf('Typeography', module);

stories.addDecorator(withThemesProvider(Theme));

stories.add('Headline', () => (
  <Headline>Hello World</Headline>
))