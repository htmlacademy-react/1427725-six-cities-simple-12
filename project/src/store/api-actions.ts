import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer, Offers } from '../types/offer';
import { loadOffers, redirectToRoute, requireAuthorization, setEmail, setOffer, setOffersDataLoadingStatus, setOffersNearby, setReviews } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Reviews, NewReview } from '../types/review.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offers>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: { email } } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setEmail(email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setEmail(email));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setEmail(undefined));
  },
);

export const fetchSingleOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSingleOffer',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));

    const [
      { data: offer },
      { data: offersNearby },
      { data: reviews }
    ] = await Promise.all([
      api.get<Offer>(APIRoute.HotelById(offerId)),
      api.get<Offers>(APIRoute.HotelsNearbyById(offerId)),
      api.get<Reviews>(APIRoute.CommentsById(offerId))
    ]);

    dispatch(setOffer(offer));
    dispatch(setOffersNearby(offersNearby));
    dispatch(setReviews(reviews));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const createReviewAction = createAsyncThunk<void, NewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/createReviewAction',
  async ({ comment, rating, hotelId }, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data: comments } = await api.post<Reviews>(APIRoute.CommentsById(hotelId), { comment, rating });
    dispatch(setReviews(comments));
    dispatch(setOffersDataLoadingStatus(false));
  },
);
