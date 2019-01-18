import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../theme';
import Hero from './index';

const theme = [Theme];
const stories = storiesOf('3. Component - 3.1 Hero', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Hero', () => (
  <React.Fragment>
    <Hero background={600} />
  </React.Fragment>
));
