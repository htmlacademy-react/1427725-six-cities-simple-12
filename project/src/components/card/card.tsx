import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ActiveOffer, Offer } from '../../types/offer';
import { MouseEvent } from 'react';
import { convertRatingToWitdh } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { fetchSingleOfferAction } from '../../store/api-actions';

type CardProps = {
  offer: Offer;
  onActiveCardChange?: (activeOffer: ActiveOffer) => void;
}

function Card({ offer, onActiveCardChange }: CardProps): JSX.Element {
  const { isPremium, previewImage, price, rating, title, type } = offer;
  const roomLink = `${AppRoute.Room}/${offer.id}`;

  const dispatch = useAppDispatch();

  const listItemHoverHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (onActiveCardChange) {
      onActiveCardChange(offer);
    }
  };

  return (
    <article className="cities__card place-card"
      onMouseEnter={listItemHoverHandler}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link
          to={roomLink}
          onClick={() => {
            dispatch(fetchSingleOfferAction(offer.id.toString()));
          }}
        >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={convertRatingToWitdh(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={roomLink}>{title}</Link>
        </h2>
        <p className="place-card__type" style={{ textTransform: 'capitalize' }}>{type}</p>
      </div>
    </article >
  );
}

export default Card;
