import styled from 'styled-components';

export const StyledQuote = styled.figure`
  padding: .5rem 1rem;
  border: .125rem solid #aaffaa;
  background-color: #1e1e1e;
  border-radius: .5rem;
  margin: .4rem .4rem;
  color: #ffffff;
  & ::selection {
    color: #121212;
    background: #aaffaa;
  }
`;