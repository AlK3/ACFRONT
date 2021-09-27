import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadQuote } from "../actions";
import { Button } from "../components/Button/Button";
import { Quote } from "../components/Quote/Quote";

export const RandomPage = (props) => {
    const dispatch = useDispatch();
    const quote = useSelector(state => state.quote.quote);

    return (
        <>
            <Quote quote={quote} />
            <div className='wrapper'>
                <Button color='#faa' onClick={() => dispatch(loadQuote())}>Random</Button>
            </div>
        </>
    );
}