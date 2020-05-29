import React from 'react';
import { Layout, SEO } from 'components/common';
import { Contact, Summary, Experience, Skills, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Summary />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </Layout>
);
