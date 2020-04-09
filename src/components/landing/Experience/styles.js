import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
  border-top: 1px solid lightgrey;
  padding: 2em 0;
  text-align: center;
`;

export const ExperienceHeading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: Montserrat;
  margin-bottom: 2rem;
`;

export const ExperienceDetails = styled.div`
  font-size: 1rem;
`;

export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 1.75em;

  @media (max-width: 601px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const JobCompany = styled.div`
  text-align: left;

  p {
    margin-bottom: 0.1em;
  }

  p:last-child {
    font-size: 1rem;
  }

  @media (max-width: 601px) {
    text-align: center;
  }
`;

export const JobTitle = styled.div`
  text-align: right;
  @media (max-width: 601px) {
    text-align: center;
  }
`;
