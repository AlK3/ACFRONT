import { Toolbar } from '@mui/material';
import React from 'react';
import { ButtonContained } from '../Button/Button.styles';
import { StyledLink } from '../Link/Link.styles';
import { StyledHeader } from './Header.styles';

export const Header = ({items}) => {
  return (
    <header>
      <StyledHeader>
        <Toolbar style={{justifyContent: 'space-evenly'}}>
          {items.map(item => {
            return (
              <StyledLink to={item}>
                <ButtonContained
                  key={item}>
                    {item}
                </ButtonContained>
              </StyledLink>
            );
          })}
        </Toolbar>
      </StyledHeader>
      <hr />
    </header>
  );
}