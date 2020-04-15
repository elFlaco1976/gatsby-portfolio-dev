import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { SkillsWrapper, SkillsHeading, SkillsDetails } from './styles';

export const Skills = () => (
  <SkillsWrapper id="skills">
    <SkillsHeading>Skills</SkillsHeading>
    <SkillsDetails>
      <p>
        In my day to day I use multiple technologies that provide style and functionality to a web site or web app. Here
        are the main ones that I use to craft my work:
      </p>
      <p>HTML5 / CSS3 / JavaScript / React / Node / Next.js / Gatsby / Eslint / RESTful APIs</p>
    </SkillsDetails>
  </SkillsWrapper>
);
