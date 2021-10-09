import React from 'react';
import { StyledFooter } from './Footer.styles';
import { ButtonText } from '../Button/Button.styles';

export const Footer = () => {

  return (
    <StyledFooter>
      <a href='https://github.com/AlK3'><ButtonText variant='text'>made by AlK3</ButtonText></a>
    </StyledFooter>
  );
}