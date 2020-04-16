import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 3em 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SummaryHeading = styled.div`
  flex-basis: 35%;
  font-size: 1.77rem;
  font-weight: bold;
  font-family: Montserrat;

  @media (max-width: 480px) {
    margin-bottom: 0.5em;
  }
`;

export const SummaryDetails = styled.div`
  flex-basis: 55%;
  text-align: left;
  font-size: 1rem;
  font-family: Montserrat;

  p {
    margin-bottom: 0.75em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const Center = styled.div`
  text-align: center;
  display: block;
  margin: 0 auto;
`;
