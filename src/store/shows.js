/* eslint-disable no-param-reassign, no-console,  no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const search = createAsyncThunk(
  'shows/search', ({ searchText }) => axios.get(`http://api.tvmaze.com/search/shows?q=${searchText}`).then((res) => res.data),
);

const slice = createSlice({
  name: 'shows',
  initialState: {
    results: null,
    // user: null,
    // authenticated: null,
    // authenticating: null,
    // errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [search.pending]: () => {
      // console.log('search.pending');
    },
    [search.fulfilled]: (state, action) => {
      // console.log('search.fulfilled');
      // state.user = { _id: action.payload.user._id, name: action.payload.user.name };
      state.results = action.payload;
    },
    [search.rejected]: (state) => {
      console.log('search.rejected');
      // state.authenticated = false;
      // state.authenticating = false;
    },
  },
});

export default slice.reducer;
// export const { noLogin } = slice.actions;
// export const logout = () => (dispatch) => axios.get('/api/v1/auth/logout')
//   .then(() => dispatch(slice.actions.logoutSuccess()));
