import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Loader } from '../components/Loader/Loader';
import { Main } from "../components/Main/Main";
import { PaginatorTypeTwo } from '../components/Paginator/PaginatorTypeTwo';
import { QuoteList } from '../components/QuoteList/QuoteList';
import { Title } from "../components/Title/Title";
import { loadQuotes } from '../store/actions';

export const AnimePage = (props) => {
  const {animeId} = useParams();
  const dispatch = useDispatch();
  const pageAnime = useSelector(state => state.page.pageAnime);
  const quotes = useSelector(state => state.quote.quotes);
  const load = useSelector(state => state.load.load);
  
  useEffect(() => {
    dispatch(loadQuotes(animeId, pageAnime));
  }, []);

  return (
    <Main>
      <Title>{animeId}</Title>
      {load ?
        <Loader />
        :
        <>
          {quotes[0] ?
            <>
              <QuoteList quotes={quotes} />
              <PaginatorTypeTwo anime={animeId} />
            </>
            :
            <Typography component='p'>No quotes... sorry.</Typography>
          }
        </>
      }
    </Main>
);
}