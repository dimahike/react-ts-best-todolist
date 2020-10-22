import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';
import { loadState, saveState } from './loadState';

const persistedState = loadState();
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;


// const store: Store<ArticleState, ArticleAction> & {
//   dispatch: DispatchType;
// } = createStore(reducer, applyMiddleware(thunk));
