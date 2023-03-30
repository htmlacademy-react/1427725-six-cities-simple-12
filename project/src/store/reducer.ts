import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, initialCity } from '../const';
import { setCity, loadOffers, setOffersDataLoadingStatus, requireAuthorization } from './action';
import { Offers } from '../types/offer';

type InitalState = {
  cityName: CityName;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
}

const initialState: InitalState = {
  cityName: initialCity,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
