import React from 'react';
import { Item } from '../Item/Item';
import { StyledGrid } from './Grid.styles';

export const Grid = (props) => {
  return (
    <StyledGrid>
      {
        props.items.map(item => {
          return <Item key={item}
                      item={item} />;
        })
      }
    </StyledGrid>
  );
}