import styled from 'styled-components';
// import myImage from 'assets/images/camila-waz-2l5U8g4f8hQ-unsplash.jpg';
import myImage from 'assets/illustrations/footer.svg';

export const TestDiv = styled.div``;

export const Test = styled.div`
  background-image: url(${myImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

// it works
export const TestImage = styled.img`
  max-width: 100%;
`;

// it works
export const TestImage2 = styled.div`
  background-image: url(${props => props.src});
`;

export const IntroWrapper = styled.div`
  padding-top: 10em;
  padding-bottom: 7.5rem;
  display: flex;

  background-image: url(${props => props.src});
  background-size: cover;
  background-position: top;
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
    font-size: 5rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 0;

    @media (max-width: 680px) {
      font-size: 5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 2.1rem;
    font-weight: normal;
  }
`;
