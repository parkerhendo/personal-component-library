import React from 'react';

import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../../utils/theme';
import FontLoader from '../../utils/helpers/FontLoader';
import Caption from './index';

const theme = [Theme];
const stories = storiesOf(' Typography - 4. Caption', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Caption', () => (
  <React.Fragment>
    <FontLoader />
    <Caption>
      Writing is a medium of human communication that represents language and emotion with signs and symbols. In most languages, writing is a complement to speech or spoken language. Writing is not a language, but a tool used to make languages be read. Within a language system, writing relies on many of the same structures as speech, such as vocabulary, grammar, and semantics, with the added dependency of a system of signs or symbols. The result of writing is called text, and the recipient of text is called a reader.
    </Caption>
  </React.Fragment>
));
