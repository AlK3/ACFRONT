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
    console.log(page);
    dispatch(loadQuotes(page));
    dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: props.anime, page: page}});
    dispatch(loadQuotes(props.anime, page));
  };

  return (
    <StyledPaginator>
      {
        <>
          <ButtonText onClick={pageAnime.page > 1 ? () => onClick(pageAnime.page - 1) : null}>Previous</ButtonText>
          <ButtonText>{pageAnime.page}</ButtonText>
          <ButtonText onClick={quotes[9] ? () => onClick(pageAnime.page + 1) : null}>Next</ButtonText>
        </>
      }
    </StyledPaginator>
  );
}