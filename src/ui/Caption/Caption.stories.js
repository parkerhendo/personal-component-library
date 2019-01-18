import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../utils/theme';
import FontLoader from '../../utils/helpers/FontLoader';
import Caption from './index';

const theme = [Theme];
const stories = storiesOf('Typography - 4. Caption', module);

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
