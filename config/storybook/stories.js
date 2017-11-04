import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Loader from '../../src/lib/loader/loader';
import Header from '../../src/lib/header/header';

storiesOf('Loader', module)
  .add('with text', () => (
    <Loader>Hello Button</Loader>
  ));

storiesOf('Header', module)
  .add('with text', () => (
    <Header>Hello Button</Header>
  ));