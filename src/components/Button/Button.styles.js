import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonContained = styled(Button)`
  && {
    margin: .4rem;
    color: #000000;
    background: #ff7597;
    :link, :visited, :focus {
      background: #ff7597;
    }
    :hover {
      background: #ff0266;
    }
    
    :active {
      background: #ff0266;
    }
  }
`;

export const ButtonText = styled(Button)`
  && {
    margin: .4rem;
    color: #ffffff;

    :hover {
      background: #ff7597;
    }
    
    :active {
      background: #ff7597;
    }
  }
`;