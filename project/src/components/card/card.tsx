import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';

type CardProps = {
  offer: Offer;
}

type ActiveCard = Offer | null;

function Card({ offer }: CardProps): JSX.Element {
  const { isPremium, price, rating, title, type } = offer;
  const [, setActiveCard] = useState<ActiveCard>(null);
  const roomLink = `${AppRoute.Room}/${offer.id}`;

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => setActiveCard(offer)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={roomLink}>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place"></img>
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
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
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
