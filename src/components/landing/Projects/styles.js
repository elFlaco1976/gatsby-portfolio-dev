import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;

export const ProjectsContainer = styled.div`
  padding: 3em 0;
  text-align: center;
  border-bottom: 1px solid lightgrey;
`;

export const ProjectsHeading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: Montserrat;
  margin-bottom: 2rem;
`;

export const ProjectsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProjectCard = styled.div`
  box-sizing: border-box;
  width: 400px;
  padding: 1em;
  margin: 0 1em;
  border: 1px solid lightgrey;
  border-radius: 5px;

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
