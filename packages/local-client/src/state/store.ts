import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistMiddlware } from './middlewares/persist-middlware';

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(persistMiddlware, thunk))
);
