import styled from 'styled-components';
import { StyledLink } from '../Link/Link.styles';

export const StyledItem = styled(StyledLink)`
  padding: .2rem 1rem;
  margin: .2rem .2rem;
  word-wrap: break-word;
  color: #aaffaa;
  :hover {
    background: #121212;
  }
  
  :active {
    background: #121212;
  }
`;