import React, { useState } from 'react';
import { ProjectCard, ProjectImage, ProjectDetails, ProjectTitle, ProjectOverlay } from './styles';

// TODO: SEP 5 2020 - OVERLAY VACIO FUNCIONAL - COLOCAR LOS ICONOS
const Project = ({ data }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleMouseEnter = () => setOverlayVisible(true);
  const handleMouseLeave = () => setOverlayVisible(false);

  return (
    <ProjectCard
      href={data.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProjectTitle>{data.title}</ProjectTitle>
      <ProjectImage src={data.image}></ProjectImage>
      <ProjectDetails>{data.description}</ProjectDetails>
      {isOverlayVisible && <ProjectOverlay />}
    </ProjectCard>
  );
};

export default Project;
