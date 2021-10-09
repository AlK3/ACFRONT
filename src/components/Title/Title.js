import React from 'react';
import { StyledTitle } from './Title.styles';

export const Title = ({ children }) => {

    return (
    <StyledTitle>
      <div>
        { children }
      </div>
    </StyledTitle>
    );
}