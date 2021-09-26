import { useDispatch, useSelector } from 'react-redux';
import { Grid } from './components/Grid/Grid';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { Loader } from './components/Loader/Loader';
import { PaginatorTypeOne } from './components/Paginator/PaginatorTypeOne';
import { Quote } from './components/Quote/Quote';
import { Button } from './components/Button/Button';
import { PaginatorTypeTwo } from './components/Paginator/PaginatorTypeTwo';
import QuoteList from './components/QuoteList/QuoteList';

function App() {
  const dispatch = useDispatch();
  const anime = useSelector(state => state.anime.anime);
  const load = useSelector(state => state.load.load);

  const headerItem = useSelector(state => state.headerItem.headerItem);
  const headerItems = ['Anime List', 'Random Quote'];

  const pageAnime = useSelector(state => state.page.pageAnime);
  const pageMain = useSelector(state => state.page.pageMain);
  const perPage = useSelector(state => state.page.perPage);

  const lastAnimeIndex = pageMain * perPage;
  const firstAnimeIndex = lastAnimeIndex - perPage;
  const currentAnime = anime.slice(firstAnimeIndex, lastAnimeIndex);

  const quote = useSelector(state => state.quote.quote);
  const quotes = useSelector(state => state.quote.quotes);

  const updateAnime = () => {
    dispatch({type: 'SET_LOAD', payload: true});
    fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(anime => {
        dispatch({type: 'UPDATE_ANIME', payload: anime});
        dispatch({type: 'SET_LOAD', payload: false});
      });
  }

  const updateQuote = () => {
    dispatch({type: 'SET_LOAD', payload: true});
    fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
      .then(q => {
        dispatch({type: 'UPDATE_QUOTE', payload: q});
        dispatch({type: 'SET_LOAD', payload: false});
      })
  }

  useEffect(() => {
    dispatch({type: 'SET_HEADER_ITEM', payload: headerItems[0]});
    updateAnime();
    updateQuote();
  }, []);

  return (
    <>
      <Header items={headerItems} />
      {load ?
        <Loader />
        :
        headerItem === headerItems[0] ?
          <>
            {0 === pageAnime.page ?
              <>
                <Grid items={currentAnime} />
                <PaginatorTypeOne total={anime.length} />
              </>
              :
              <>
                {load ? <Loader /> : <QuoteList quotes={quotes} />}
                {quotes[0] && <PaginatorTypeTwo />}
                <div className='wrapper'>
                  <Button color='#faa' onClick={() => dispatch({type: 'UPDATE_PAGE_ANIME', payload: {anime: '', page: 0}})}>Back</Button>
                </div>
              </>
            }
          </>
          :
          <>
            <Quote quote={quote} />
            <div className='wrapper'>
              <Button color='#faa' onClick={updateQuote}>Random</Button>
            </div>
          </>
      }
    </>
  );
}

export default App;