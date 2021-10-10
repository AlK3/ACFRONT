import React from 'react';
import { ButtonContained } from '../Button/Button.styles';
import { StyledLink } from '../Link/Link.styles';
import { StyledNoFound } from './NoFound.styles';

export const NoFound = () => {

	return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <StyledNoFound>
        <div>
          No Quotes... sorry.
        </div>
      </StyledNoFound>
      <StyledLink to='/Anime List'>
        <ButtonContained>
          Back
        </ButtonContained>
      </StyledLink>
    </div>
	);
}