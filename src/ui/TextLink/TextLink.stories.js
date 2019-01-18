import React from 'react';

import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../utils/theme';
import FontLoader from '../../utils/helpers/FontLoader';
import TextLink from './index';

const theme = [Theme];
const stories = storiesOf('Typography - 3. TextLink', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Text - Large', () => (
  <React.Fragment>
    <FontLoader />
    <TextLink>
      Read More
    </TextLink>
  </React.Fragment>
));
