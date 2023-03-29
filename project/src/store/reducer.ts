import { createReducer } from '@reduxjs/toolkit';
import { initialCity } from '../const';
import { Offers } from '../types/offer';
import { setCity, loadOffers } from './action';

const initialState = {
  cityName: initialCity,
  offers: [] as Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
