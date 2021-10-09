import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledItem = styled(Link)`
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