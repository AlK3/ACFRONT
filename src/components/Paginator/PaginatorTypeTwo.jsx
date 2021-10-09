import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadQuotes } from '../../store/actions';
import { ButtonText } from "../Button/Button.styles";
import { StyledPaginator } from "./Paginator.styles";

export const PaginatorTypeTwo = (props) => {
  const dispatch = useDispatch();
  const quotes = useSelector(state => state.quote.quotes);
  const pageAnime = useSelector(state => state.page.pageAnime);

  const onClick = (page) => {
    dispatch(loadQuotes(page));
    dispatch({type: 'UPDATE_PAGE_ANIME', payload: page});
    dispatch(loadQuotes(props.anime, page));
  };

  return (
    <StyledPaginator>
      {
        <>
          <ButtonText onClick={pageAnime > 1 ? () => onClick(pageAnime - 1) : null}>Previous</ButtonText>
          <ButtonText>{pageAnime}</ButtonText>
          <ButtonText onClick={quotes[9] ? () => onClick(pageAnime + 1) : null}>Next</ButtonText>
        </>
      }
    </StyledPaginator>
  );
}