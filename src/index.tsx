import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore, applyMiddleware, Store } from 'redux';
// import thunk from 'redux-thunk';

import App from './App';
import store from './redux/store';

const rootElement = document.getElementById('root');

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement,
);
