import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../const';
import { Offers } from '../types/offer';

export const setCity = createAction<{ cityName: CityName }>('setCity');

export const setOffers = createAction<{ offers: Offers }>('setOffers');
