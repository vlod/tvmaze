import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import shows from './shows';

const reducer = combineReducers({
  shows,
});

const store = configureStore({ reducer });
export default store;
