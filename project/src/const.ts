export enum AppRoute {
  Main = '/',
  Login = '/login',
  OfferId = '/offer/:id',
  Room = '/offer',
}

export const REVIEW_MIN_LENGTH = 50;

export const URL_MARKER_DEFAULT =
  './img/pin.svg';

export const URL_MARKER_CURRENT =
  './img/pin-active.svg';

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const initialCity = CityName.Paris;

export const SortType = {
  Popular: { text: 'Popular', id: 0 },
  PriceLowToHigh: { text: 'Price: low to high', id: 1 },
  PriceHighToLow: { text: 'Price: high to low', id: 2 },
  TopRatedFirst: { text: 'Top rated first', id: 3 },
};

export const initialSortType = SortType.Popular;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export class APIRoute {
  static Hotels = '/hotels';
  static Login = '/login';
  static Logout = '/logout';
  static HotelById = (id: string): string => `/hotels/${id}`;
  static HotelsNearbyById = (id: string): string => `/hotels/${id}/nearby`;
  static CommentsById = (id: string): string => `/comments/${id}`;
}

export const RATING_STARS_COUNT = 5;

export const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
