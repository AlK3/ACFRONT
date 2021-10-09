import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonText } from '../Button/Button.styles';
import { StyledPaginator } from './Paginator.styles';

export const PaginatorTypeOne = ({total}) => {
  const dispatch = useDispatch();
  const pageMain = useSelector(state => state.page.pageMain);
  const perPage = useSelector(state => state.page.perPage);

  const pageNumbers = [];

  for(let i = 1; i < Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPaginator>
      {
        pageNumbers.map(number => (
          <ButtonText key={number}
                      onClick={() => dispatch({type: 'UPDATE_PAGE_MAIN', payload: number})}>
            {number}
          </ButtonText>
        ))
      }
    </StyledPaginator>
  );
}