import React from 'react';
import { Footer, Header } from 'components/theme';
import { Intro } from 'components/landing';
import { Global, WrapperBody } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <Global />
    <Header />
    <Intro />
    <WrapperBody>{children}</WrapperBody>
    <Footer />
  </>
);
