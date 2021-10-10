import React from 'react';
import { nanoid } from 'nanoid';
import { Quote } from '../Quote/Quote';
import { StyledQuoteList } from './QuoteList.styles';

export const QuoteList = (props) => {

  return (
    <StyledQuoteList>
      {props.quotes.map(quote => {
        return <Quote key={nanoid()} quote={quote}/>;
      })}
    </StyledQuoteList>
  );
}