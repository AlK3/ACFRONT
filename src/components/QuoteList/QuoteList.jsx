import { nanoid } from "nanoid";
import React from "react";
import { Quote } from "../Quote/Quote";
import { StyledQuoteList } from "./StyledQuoteList";

export default function QuoteList(props) {
    console.log(props.quotes);
    return (
        <StyledQuoteList>
            {
                props.quotes.map(quote => {
                    return <Quote key={nanoid()} quote={quote}/>;
                })
            }
        </StyledQuoteList>
    );
}
