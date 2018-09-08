import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { BrowserRouter, } from 'react-router-dom';
import App from './App';
import store from './store';


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
