import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import Theme from '../theme';
import FontLoader from '../helpers';

import Caption from './Caption';
import Headline from './Headline';
import Text from './Text';
import TextLink from './TextLink';
import Hero from './Hero';
import Container from './Container';

const theme = [Theme];
const stories = storiesOf('Sandbox', module);

stories.addDecorator(withThemesProvider(theme));

stories.add('Typography', () => (
  <React.Fragment>
    <FontLoader />
    <Headline header>24. Order of props matters!</Headline>
    <Caption inline>January 11, 2019</Caption>
    <Caption inline ml={16}>Parker Henderson</Caption>
    <Text>
      This is part of a series of posts about writing component API for great developer experience.
    </Text>
    <Text> When it comes to React components, props are the API that developers consume.</Text>
    <Text>
      You want to make it easier for them to use your component Here’s part #1 and #2 if you missed
      it: &nbsp;
      <TextLink href="https://google.com" target="_blank">
        Writing good component API
      </TextLink>
    </Text>
  </React.Fragment>
));

stories.add('Hero', () => (
  <React.Fragment>
    <FontLoader />
    <Hero background={200}>
      <Container>
        <Caption>Product designer and developer</Caption>
        <Headline header>Parker Henderson</Headline>
      </Container>
    </Hero>
  </React.Fragment>
));
