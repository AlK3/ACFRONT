import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonContained } from '../components/Button/Button.styles';
import { Loader } from '../components/Loader/Loader';
import { Main } from '../components/Main/Main';
import { Quote } from '../components/Quote/Quote';
import { Title } from '../components/Title/Title';
import { loadQuote } from '../store/actions';

export const RandomPage = () => {
  const dispatch = useDispatch();
  const quote = useSelector(state => state.quote.quote);
  const load = useSelector(state => state.load.load);

  useEffect(() => {
    if (!quote.quote.trim())
      dispatch(loadQuote());
  }, []);

  const clickHandler = () => {
    dispatch(loadQuote());
  }

  return (
      <Main>
        <Title>Random Quote</Title>
        {load ?
          <Loader />
          :
          <Quote quote={quote}/>
        }
        <ButtonContained onClick={clickHandler}>Random</ButtonContained>
      </Main>
  );
}