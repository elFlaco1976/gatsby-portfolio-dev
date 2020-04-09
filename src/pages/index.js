import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Contact, Summary, Experience, Skills } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Summary />
    <Skills />
    <Experience />
    <Contact />
  </Layout>
);
