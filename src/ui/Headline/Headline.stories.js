import React from 'react';

import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../utils/theme';
import FontLoader from '../../utils/helpers/FontLoader';
import Headline from './index';

const theme = [Theme];
const stories = storiesOf('Typeography', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Headline - Hero', () => (
  <React.Fragment>
    <FontLoader />
    <Headline hero>Hero Headline</Headline>
  </React.Fragment>
));

stories.add('Headline - Section', () => (
  <React.Fragment>
    <FontLoader />
    <Headline section>Section Headline</Headline>
  </React.Fragment>
));
