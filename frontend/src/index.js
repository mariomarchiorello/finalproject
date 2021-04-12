import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/index';
import { GlobalStyle } from './globalstyles/globalStyle';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>,
  document.getElementById('root')
);
