import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <IntroWrapper id="about">
    <Details>
      <h1>Francisco Collazos</h1>
      <p>I build effective websites. Let me help you with yours!</p>
    </Details>
  </IntroWrapper>
);
