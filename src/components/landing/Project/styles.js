import styled from 'styled-components';

export const ProjectCard = styled.a`
  box-sizing: border-box;
  width: 400px;
  padding: 1em;
  margin: 0 1em;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: black;

  @media (max-width: 905px) {
    &:nth-child(odd) {
      margin-bottom: 1em;
    }
  }
`;

export const ProjectImage = styled.img`
  max-width: 100%;
`;

export const ProjectDetails = styled.div`
  background: white;
`;

export const ProjectTitle = styled.h2`
  text-align: center;
`;
