import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { StyledHeader } from "./StyledHeader";

export const Header = ({items}) => {
    const dispatch = useDispatch();
    const headerItem = useSelector(state => state.headerItem.headerItem);

    return (
        <header>
            <StyledHeader>
                 {items.map(item => {
                     return <Button
                        key={item}
                        color={item === headerItem ? '#faa' : '#aaf'}
                        onClick={() => dispatch({type: 'SET_HEADER_ITEM', payload: item})}>
                            {item}
                        </Button>
                 })}
            </StyledHeader>
            <hr />
        </header>
    );
}