import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, initialCity } from '../const';
import { setCity, loadOffers } from './action';
import { Offers } from '../types/offer';

type InitalState = {
  cityName: CityName;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  cityName: initialCity,
  offers: [],
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
