import { Offers } from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offers;
}

function CardsList({ offers }: CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}-${offer.title}`;
        return <Card offer={offer} key={keyValue} />;
      })}
    </div>
  );
}

export default CardsList;
