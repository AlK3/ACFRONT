import { Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContained } from '../Button/Button.styles';
import { StyledHeader } from './Header.styles';

export const Header = ({items}) => {
  return (
    <header>
      <StyledHeader>
        <Toolbar style={{justifyContent: 'space-evenly'}}>
          {items.map(item => {
            return (
              <Link to={item}>
                <ButtonContained
                  key={item}>
                    {item}
                </ButtonContained>
              </Link>
            );
          })}
        </Toolbar>
      </StyledHeader>
      <hr />
    </header>
  );
}