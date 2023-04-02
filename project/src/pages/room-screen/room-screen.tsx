import CardsList from '../../components/cards-list/cards-list';
import CommentForm from '../../components/comment-form/comment-form';
import Logo from '../../components/logo/logo';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { ActiveOffer } from '../../types/offer';
import Map from '../../components/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import HeaderProfile from '../../components/header-profile/header-profile';
import { AuthorizationStatus } from '../../const';
import { convertRatingToWitdh } from '../../utils';
import cn from 'classnames';

function RoomScreen(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offer = useAppSelector((state) => state.offer);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  const reviews = useAppSelector((state) => state.reviews);
  const [activeCard, setActiveCard] = useState<ActiveOffer>(undefined);

  const handleActiveCardChange = (activeOffer: ActiveOffer) => {
    setActiveCard(activeOffer);
  };

  if (offer === undefined) {
    return <div />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>six cities simple: property</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <HeaderProfile />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, 6).map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="studio"></img>
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={convertRatingToWitdh(offer.rating)}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire" style={{ textTransform: 'capitalize' }}>
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedroom{offer.bedrooms !== 1 && 's'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adult{offer.maxAdults !== 1 && 's'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => <li className="property__inside-item" key={good}>{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={cn('property__avatar-wrapper', 'user__avatar-wrapper', { 'property__avatar-wrapper--pro': offer.host.isPro })}>
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"></img>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.Auth && <CommentForm />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            {offer && <Map offers={offersNearby} selectedOffer={activeCard} city={offer.city}></Map>}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={offersNearby} onActiveCardChange={handleActiveCardChange} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
