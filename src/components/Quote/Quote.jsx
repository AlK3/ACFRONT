import React from "react";
import { StyledQuote } from "./StyledQuote";

export const Quote = ({quote}) => {

    return (
    <StyledQuote>
        <blockquote>
            <q>
                {quote.quote}
            </q>
        </blockquote>
        <figcaption>
            —{quote.character},
            &nbsp;
            <cite>
                {quote.anime}
            </cite>
        </figcaption>
    </StyledQuote>
    );
}