import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import {
  ExperienceWrapper,
  ExperienceDetails,
  ExperienceHeading,
  ExperienceItem,
  JobCompany,
  JobTitle,
} from './styles';

export const Experience = () => (
  <ExperienceWrapper id="experience">
    <ExperienceHeading>Experience</ExperienceHeading>
    <ExperienceDetails>
      <ExperienceItem>
        <JobCompany>
          <p>Amilia</p>
          <p>10.2017 - 6.2019 / Montréal, CA</p>
        </JobCompany>
        <JobTitle>Full-stack developer</JobTitle>
      </ExperienceItem>
      <ExperienceItem>
        <JobCompany>
          <p>Hibernum</p>
          <p>9.2016 - 5.2017 / Montréal, CA</p>
        </JobCompany>
        <JobTitle>Generalist programmer</JobTitle>
      </ExperienceItem>
      <ExperienceItem>
        <JobCompany>
          <p>Gameloft</p>
          <p>8.2013 - 8.2016 / Montréal, CA</p>
        </JobCompany>
        <JobTitle>Generalist programmer</JobTitle>
      </ExperienceItem>
    </ExperienceDetails>
  </ExperienceWrapper>
);
