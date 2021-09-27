import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { Loader } from './components/Loader/Loader';
import { loadAnime, loadQuote } from './actions';
import { ListPage } from './pages/ListPage'; 
import { RandomPage } from './pages/RandomPage';
import { AnimePage } from './pages/AnimePage';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const load = useSelector(state => state.load.load);

  const headerItem = useSelector(state => state.headerItem.headerItem);
  const headerItems = ['Anime List', 'Random Quote'];

  const pageAnime = useSelector(state => state.page.pageAnime);

  useEffect(() => {
    dispatch({type: 'SET_HEADER_ITEM', payload: headerItems[0]});
    dispatch(loadAnime());
    dispatch(loadQuote());
  }, []);

  return (
    <Router>
      <Header items={headerItems} />
      {load ?
        <Loader />
        :
        <Switch>
          <Route path='/Anime List' component={ListPage} />
          <Route path='/Random Quote' component={RandomPage} />
          <Route path='/Item' component={AnimePage} />
          <Redirect to='/Anime List' />
        </Switch>
      }
    </Router>
  );
}

export default App;

/*headerItem === headerItems[0] ?
          <>
            {0 === pageAnime.page ?
              <ListPage />
              :
              <AnimePage />
            }
          </>
          :
          <RandomPage />*/