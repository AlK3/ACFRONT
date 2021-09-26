import React from "react";
import { useDispatch } from "react-redux";
import { loadQuotes, updateQuotes } from "../../actions/actions";
import { StyledItem } from "./StyledItem";

export const Item = ({item}) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: item, page: 1}});
        loadQuotes(dispatch, item, 1);
    };

    return (
        <StyledItem onClick={onClick}>
            {item}
        </StyledItem>
    );
}
