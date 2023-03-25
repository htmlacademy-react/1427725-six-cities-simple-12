import { createReducer } from '@reduxjs/toolkit';
import { initialCity } from '../const';
import { Offers } from '../types/offer';
import { setCity, setOffers } from './action';

const initialState = {
  city: initialCity,
  offers: [] as Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(setOffers, (state, action) => {
      const { offers } = action.payload;
      state.offers = offers;
    });
});

export { reducer };
