import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../theme';
import FontLoader from '../../helpers';
import Headline from './index';

const theme = [Theme];
const stories = storiesOf('1. Typography - 1.1 Headline', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Headline - Hero', () => (
  <React.Fragment>
    <FontLoader />
    <Headline type="hero">Hero Headline</Headline>
  </React.Fragment>
));

stories.add('Headline - Header', () => (
  <React.Fragment>
    <FontLoader />
    <Headline type="header">Hero Headline</Headline>
  </React.Fragment>
));

stories.add('Headline - Section', () => (
  <React.Fragment>
    <FontLoader />
    <Headline type="section">Section Headline</Headline>
  </React.Fragment>
));
