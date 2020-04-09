import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  border-top: 1px solid lightgrey;
  padding: 2em 0;
`;

export const SummaryWrapper = styled.div`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

/* export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`; */

export const SummaryHeading = styled.div`
  flex-basis: 45%;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const SummaryDetails = styled.div`
  text-align: center;

  p:last-child {
    margin-bottom: 0;
  }
`;

/* export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  text-align: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`; */
