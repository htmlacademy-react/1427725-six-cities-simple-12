import { Offer, Offers } from './types/offer';
import { initialSortType, SortType } from './const';

type SortTypeItem = typeof initialSortType;

const convertRatingToWitdh = (rating: number) => ({ width: `${Math.round(rating) * 20}%` });

const sortOffers = (offers: Offers, sortType: SortTypeItem): void => {
  let compareFn: (a: Offer, b: Offer) => number;
  switch (sortType) {
    case SortType.Popular:
      compareFn = () => 0;
      break;
    case SortType.PriceLowToHigh:
      compareFn = (a: Offer, b: Offer): number => a.price - b.price;
      break;
    case SortType.PriceHighToLow:
      compareFn = (a: Offer, b: Offer): number => b.price - a.price;
      break;
    case SortType.TopRatedFirst:
      compareFn = (a: Offer, b: Offer): number => b.rating - a.rating;
      break;
    default:
      compareFn = () => 0;
  }
  offers.sort(compareFn);
};

const delay = async (ms: number): Promise<void> => {
  await new Promise<void>((resolve) => { setTimeout(() => resolve(), ms); });
};

export { convertRatingToWitdh, sortOffers, delay };
