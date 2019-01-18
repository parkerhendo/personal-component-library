import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../theme';
import FontLoader from '../../helpers';
import Caption from './index';

const theme = [Theme];
const stories = storiesOf('1. Typography - 1.4 Caption', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Caption', () => (
  <React.Fragment>
    <FontLoader />
    <Caption>
      Writing is a medium of human communication that represents language and emotion with signs and
      symbols.
    </Caption>
  </React.Fragment>
));
