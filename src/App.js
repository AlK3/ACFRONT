import { BrowserRouter, Redirect, Switch, Route  } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AnimePage } from './pages/AnimePage';
import { ListPage } from './pages/ListPage';
import { RandomPage } from './pages/RandomPage';

export const App = () => {
  const headerItems = ['Anime List', 'Random Quote'];

  return (
    <BrowserRouter>
      <Header items={headerItems}/>
      <Switch>
        <Route path={`/${headerItems[0]}`} component={ListPage} />
        <Route path={`/${headerItems[1]}`} component={RandomPage} />
        <Route path='/:animeId' component={AnimePage} />
        <Redirect to={headerItems[1]} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}