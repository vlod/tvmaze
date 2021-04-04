import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import './styles/_base.scss';

import App from './App';

const Root = (
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
