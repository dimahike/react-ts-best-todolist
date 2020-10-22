import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

import './app.scss';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
