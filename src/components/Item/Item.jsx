import React from "react";
import { useDispatch } from "react-redux";
import { StyledItem } from "./StyledItem";

export const Item = ({item, func}) => {
    const dispatch = useDispatch();
    const ocfunc = () => {
        dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: item, page: 1}});
        func(item, 1);
    }
    return (
        <StyledItem onClick={ocfunc}>
            {item}
        </StyledItem>
    );
}
