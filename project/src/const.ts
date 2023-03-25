export enum AppRoute {
  Main = '/',
  Login = '/login',
  RoomId = '/offer/:id',
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
