import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, initialCity } from '../const';
import { setCity, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setEmail, setOffer } from './action';
import { ActiveOffer, Offers } from '../types/offer';
import { Email } from '../types/email';

type InitalState = {
  cityName: CityName;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  email: Email;
  offer: ActiveOffer;
}

const initialState: InitalState = {
  cityName: initialCity,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  email: undefined,
  offer: undefined,
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
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    });
});

export { reducer };
