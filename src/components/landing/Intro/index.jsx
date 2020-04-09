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
      <p>
        I help businesses create websites that can leverage their potential and provide their clients with an effective
        user experience
      </p>
    </Details>
    {/*       <Thumbnail>
      <img src={dev} alt="I’m Francisco and I’m a Web Developer!" />
    </Thumbnail> */}
  </IntroWrapper>
);
