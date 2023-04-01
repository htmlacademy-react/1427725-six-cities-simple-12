import { useState } from 'react';
import CardsList from '../../components/cards-list/cards-list';
import Logo from '../../components/logo/logo';
import { ActiveOffer } from '../../types/offer';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import Sorting from '../../components/sorting/sorting';
import { initialSortType } from '../../const';
import { sortOffers } from '../../utils';
import HeaderProfile from '../../components/header-profile/header-profile';
import { Helmet } from 'react-helmet-async';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const [activeCard, setActiveCard] = useState<ActiveOffer>(undefined);
  const activeCity = useAppSelector((state) => state.cityName);
  const [sortType, setSortType] = useState(initialSortType);

  const cityOffers = offers.filter((offer) => offer.city.name === activeCity);
  const cityOffersCount = cityOffers.length;
  const isPageEmpty = cityOffersCount === 0;
  sortOffers(cityOffers, sortType);

  const handleActiveCardChange = (offer: ActiveOffer) => {
    setActiveCard(offer);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>six cities simple</title>
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

      <main className={`page__main page__main--index ${isPageEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList />
            </ul>
          </section>
        </div>
        <div className="cities">
          {isPageEmpty ? (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          ) : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffersCount} {cityOffersCount === 1 ? 'place' : 'places'} to stay in {activeCity}</b>
                <Sorting sortType={sortType} onChangeSortClick={(newSortType) => setSortType(newSortType)} />
                <div className="cities__places-list places__list tabs__content">
                  <CardsList offers={cityOffers} onActiveCardChange={handleActiveCardChange} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={cityOffers} selectedOffer={activeCard}></Map>
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
