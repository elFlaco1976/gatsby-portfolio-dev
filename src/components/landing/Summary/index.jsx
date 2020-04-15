import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import { Wrapper, SummaryWrapper, SummaryHeading, SummaryDetails } from './styles';

export const Summary = () => (
  <Wrapper id="about">
    <SummaryWrapper>
      <SummaryDetails>
        <p>
          I'm a front-end web developer. I love technology and how it can help people collaboratebetween them, and
          promote their organizations and positively impact society, specially through this difficult times.
        </p>
        <p>
          If you want to talk about your project, you can contact me <AnchorLink href="#contact">here</AnchorLink>.
        </p>
      </SummaryDetails>
    </SummaryWrapper>
  </Wrapper>
);
