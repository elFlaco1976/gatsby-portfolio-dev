import React from 'react';
import backgroundHeader from 'assets/images/rohit-raj-_vBGmvQWZnw-unsplash.jpg';
import { IntroWrapper, Details } from './styles';

export const Intro = () => (
  <IntroWrapper id="about" src={backgroundHeader}>
    <Details>
      <h1>Francisco Collazos</h1>
      <p>I build effective websites. Let me help you with yours!</p>
    </Details>
  </IntroWrapper>
);
