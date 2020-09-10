import styled from 'styled-components';

export const ContainerIntroAndHeader = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: top;
`;

export const IntroWrapper = styled.div`
  padding-top: 10em;
  padding-bottom: 7.5rem;
  display: flex;

  align-items: center;
  justify-content: space-between;

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
    font-size: 5rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 0;

    @media (max-width: 680px) {
      font-size: 4rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 2.1rem;
    font-weight: normal;

    @media (max-width: 680px) {
      font-size: 1.68rem;
    }
  }
`;
