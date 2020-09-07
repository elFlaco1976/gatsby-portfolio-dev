import React, { useState, useEffect, useRef } from 'react';
import linkIcon from 'assets/icons/link.svg';
import githubIcon from 'assets/icons/github.svg';
import { ProjectCard, ProjectImage, ProjectDetails, ProjectTitle, ProjectOverlay, ProjectOverlayIcon } from './styles';

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert('You clicked outside of me!');
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const Project = ({ data }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleMouseEnter = () => setOverlayVisible(true);
  const handleMouseLeave = () => {
    setOverlayVisible(false);
  };

  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        handleMouseLeave();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ProjectCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <ProjectTitle>{data.title}</ProjectTitle>
      <ProjectImage src={data.image}></ProjectImage>
      <ProjectDetails>{data.description}</ProjectDetails>
      {isOverlayVisible && (
        <div ref={overlayRef}>
          <ProjectOverlay>
            <ProjectOverlayIcon href={data.siteUrl} target="_blank" rel="noopener noreferrer">
              <img src={linkIcon} alt="link" />
            </ProjectOverlayIcon>{' '}
            <ProjectOverlayIcon href={data.gitHubUrl} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github" />
            </ProjectOverlayIcon>
          </ProjectOverlay>
        </div>
      )}
    </ProjectCard>
  );
};

export default Project;
