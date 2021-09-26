import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadQuotes } from "../../actions";
import { Button } from "../Button/Button";
import { StyledPaginator } from "./StyledPaginator";

export const PaginatorTypeTwo = (props) => {
    const dispatch = useDispatch();
    const pageAnime = useSelector(state => state.page.pageAnime);
    const quotes = useSelector(state => state.quote.quotes);

    const onClick = (page) => {
        dispatch(loadQuotes(pageAnime.anime, page));
        dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: pageAnime.anime, page: page}});
    };

    return (
        <StyledPaginator>
            {
                <>
                    <Button onClick={pageAnime.page > 1 ? () => onClick(pageAnime.page - 1) : null}>Previous</Button>
                    <Button>{pageAnime.page}</Button>
                    <Button onClick={quotes[9] ? () => onClick(pageAnime.page + 1) : null}>Next</Button>
                </>
            }
        </StyledPaginator>
    );
}