import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '../components/Grid/Grid';
import { Loader } from '../components/Loader/Loader';
import { Main } from '../components/Main/Main';
import { PaginatorTypeOne } from '../components/Paginator/PaginatorTypeOne';
import { Title } from '../components/Title/Title';
import { loadAnime, updateQuotes } from '../store/actions';

export const ListPage = () => {
  const dispatch = useDispatch();
  const anime = useSelector(state => state.anime.anime);
  const load = useSelector(state => state.load.load);

  const pageMain = useSelector(state => state.page.pageMain);
  const perPage = useSelector(state => state.page.perPage);

  const lastAnimeIndex = pageMain * perPage;
  const firstAnimeIndex = lastAnimeIndex - perPage;
  const currentAnime = anime.slice(firstAnimeIndex, lastAnimeIndex);

  const pageAnime = useSelector(state => state.page.pageAnime);
  const quotes = useSelector(state => state.quote.quotes);

  useEffect(() => {
      dispatch(updateQuotes([]));
      dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: '', page: 1}});
    if (anime.length === 0) {
      dispatch(loadAnime());
    }
  }, []);

  return (
    <Main>
      <Title>Anime List</Title>
      {load ? 
        <Loader />
        :
        <>
          <Grid items={currentAnime} />
          <PaginatorTypeOne total={anime.length} />
        </>
      }
    </Main>
);
}