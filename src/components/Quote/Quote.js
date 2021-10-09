import React from 'react';
import { StyledQuote } from './Quote.styles';

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