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
  },
  reducers: {},
  extraReducers: {
    [search.pending]: () => {
      // console.log('search.pending');
    },
    [search.fulfilled]: (state, action) => {
      // console.log('search.fulfilled');
      state.results = action.payload;
    },
    [search.rejected]: (state) => {
      console.log('search.rejected');
    },
  },
});

export default slice.reducer;
