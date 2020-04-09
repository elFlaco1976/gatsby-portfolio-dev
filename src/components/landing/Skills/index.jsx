import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { SkillsWrapper, SkillsHeading, SkillsDetails } from './styles';

export const Skills = () => (
  <SkillsWrapper id="skills">
    <SkillsHeading>Skills</SkillsHeading>
    <SkillsDetails>
      <p>These are some of the core technologies I use to craft my work:</p>
      <p>HTML5 / CSS3 / Sass / JavaScript / React / Node / Next.js / Gatsby / Eslint / RESTful APIs</p>
    </SkillsDetails>
  </SkillsWrapper>
);
