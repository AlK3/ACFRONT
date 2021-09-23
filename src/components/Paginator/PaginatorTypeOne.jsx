import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { StyledPaginator } from "./StyledPaginator";

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
                    <Button key={number}
                            color={number === pageMain ? '#faa' : '#aaf'}
                            onClick={() => dispatch({type: 'UPDATE_PAGE_MAIN', payload: number})}>
                        {number}
                    </Button>
                ))
            }
        </StyledPaginator>
    );
}