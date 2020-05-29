import React from 'react';
import projectsData from '../../../data/projectsData';
import Project from '../Project';
import { ProjectsContainer, ProjectsHeading, ProjectsListContainer } from './styles';

export const Projects = () => (
  <ProjectsContainer>
    <ProjectsHeading>My work</ProjectsHeading>
    <ProjectsListContainer>
      {projectsData.map(data => (
        <Project data={data} />
      ))}
    </ProjectsListContainer>
  </ProjectsContainer>
);
