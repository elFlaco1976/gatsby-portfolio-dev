import styled from 'styled-components';

export const IntroWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2098d1;
  color: #ffffff;
  font-family: Montserrat;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  text-align: center;
  max-width: 960px;
  margin: 0 auto;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 36pt;
    font-weight: normal;
    text-align: center;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: normal;
  }
`;
