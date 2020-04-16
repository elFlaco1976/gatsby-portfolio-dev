import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import { SummaryWrapper, SummaryHeading, SummaryDetails, Center } from './styles';

export const Summary = () => (
  <SummaryWrapper id="about">
    <SummaryHeading>I'm a front-end web developer</SummaryHeading>
    <SummaryDetails>
      <p>
        With my work and experience I can help you with the development of web projects, from static web sites like
        personal pages to complex web applications. I can also integrate the ongoing development of a web project, as
        solo or being part of a team.
      </p>
      <p>
        I love technology, specially how it can help people work together, promote their organizations and positively
        impact society, specially through this difficult times. Do you have an idea?
      </p>
      <Center>
        <AnchorLink href="#contact">
          <Button outlined>Lets talk!</Button>
        </AnchorLink>
      </Center>
    </SummaryDetails>
  </SummaryWrapper>
);
