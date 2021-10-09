import React from 'react';
import { nanoid } from "nanoid";
import { Quote } from "../Quote/Quote";
import { StyledQuoteList } from "./QuoteList.styles";

export const QuoteList = (props) => {
    return (
        <StyledQuoteList>
            {props.quotes[0] ?
                props.quotes.map(quote => {
                    return <Quote key={nanoid()} quote={quote}/>;
                })
                :
                <div className='wrapper'><h1>No Quotes</h1></div>
            }
        </StyledQuoteList>
    );
}