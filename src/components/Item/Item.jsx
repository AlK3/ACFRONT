import React from "react";
import { useDispatch } from "react-redux";
import { loadQuotes } from "../../actions";
import { StyledItem } from "./StyledItem";
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: item, page: 1}});
        dispatch(loadQuotes(item, 1));
    };

    return (
        <StyledItem>
            <Link to={`/Item?title=${item}`} onClick={onClick}>
                {item}
            </Link>
        </StyledItem>
    );
}
