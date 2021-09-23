import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { StyledPaginator } from "./StyledPaginator";

export const PaginatorTypeTwo = ({func}) => {
    const dispatch = useDispatch();
    const pageAnime = useSelector(state => state.page.pageAnime);
    const quotes = useSelector(state => state.quote.quotes);

    function ocfunc(page) {
        func(pageAnime.anime, page);
        dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: pageAnime.anime, page: page}});
    }

    return (
        <StyledPaginator>
            {
                <>
                    <Button onClick={pageAnime.page > 1 ? () => ocfunc(pageAnime.page - 1) : null}>Previous</Button>
                    <Button>{pageAnime.page}</Button>
                    <Button onClick={quotes[9] ? () => ocfunc(pageAnime.page + 1) : null}>Next</Button>
                </>
            }
        </StyledPaginator>
    );
}