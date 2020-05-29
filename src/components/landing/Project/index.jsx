import React from 'react';
import { ProjectCard, ProjectImage, ProjectDetails, ProjectTitle } from './styles';

const Project = ({ data }) => (
  <ProjectCard href={data.siteUrl} target="_blank" rel="noopener noreferrer">
    <ProjectTitle>{data.title}</ProjectTitle>
    <ProjectImage src={data.image}></ProjectImage>
    <ProjectDetails>{data.description}</ProjectDetails>
  </ProjectCard>
);

export default Project;
