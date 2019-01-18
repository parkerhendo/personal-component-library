import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../theme';
import Container from './index';

const theme = [Theme];
const stories = storiesOf('Layout - 1. Container', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Hero', () => (
  <React.Fragment>
    <Container>This is a container</Container>
  </React.Fragment>
));
