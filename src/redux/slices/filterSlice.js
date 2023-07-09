import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryID: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
});
