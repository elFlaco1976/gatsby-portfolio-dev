import React from 'react';
import backgroundHeader from 'assets/images/rohit-raj-_vBGmvQWZnw-unsplash.jpg';
import { Header } from 'components/theme';
import { IntroWrapper, Details, ContainerIntroAndHeader } from './styles';

export const IntroAndHeader = () => (
  <ContainerIntroAndHeader src={backgroundHeader}>
    <Header />
    <IntroWrapper id="about">
      <Details>
        <h1>Francisco Collazos</h1>
        <p>I build effective websites. Let me help you with yours!</p>
      </Details>
    </IntroWrapper>
  </ContainerIntroAndHeader>
);
