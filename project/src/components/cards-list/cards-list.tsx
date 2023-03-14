import { ActiveOffer, Offers } from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offers;
  onActiveCardChange: (activeOffer: ActiveOffer) => void;
}

function CardsList({ offers, onActiveCardChange }: CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}-${offer.title}`;
        return <Card offer={offer} key={keyValue} onActiveCardChange={onActiveCardChange} />;
      })}
    </div>
  );
}

export default CardsList;
