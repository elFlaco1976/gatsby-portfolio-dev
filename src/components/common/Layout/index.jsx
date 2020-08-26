import React from 'react';
import { Footer, Header } from 'components/theme';
import { IntroAndHeader } from 'components/landing';
import { Global, WrapperBody } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <Global />
    <IntroAndHeader />
    <WrapperBody>{children}</WrapperBody>
    <Footer />
  </>
);
