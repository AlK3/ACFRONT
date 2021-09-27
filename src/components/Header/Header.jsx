import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { StyledHeader } from "./StyledHeader";
import { Link } from 'react-router-dom';

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
                            <Link to={item}>
                                {item}
                            </Link>
                        </Button>
                 })}
            </StyledHeader>
            <hr />
        </header>
    );
}