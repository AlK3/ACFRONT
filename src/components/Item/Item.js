import React from 'react';
import { StyledItem } from './Item.styles';

export const Item = ({item}) => {

  return (
    <StyledItem to={`/${item}`} style={{textDecoration: 'none'}}>
      {item}
    </StyledItem>
  );
}