import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">ABOUT</AnchorLink>
    <AnchorLink href="#experience">EXPERIENCE</AnchorLink>
    <AnchorLink href="#skills">SKILLS</AnchorLink>
    <AnchorLink href="#contact">CONTACT</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
