import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, initialCity } from '../const';
import { setCity, loadOffers } from './action';
import { offers } from '../mocks/offers';


const initialState = {
  cityName: initialCity,
  offers,
  authorizationStatus: AuthorizationStatus.Unknown,
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
