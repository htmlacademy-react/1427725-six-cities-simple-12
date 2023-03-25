import { useAppSelector } from '../../hooks';
import { ActiveOffer, Offers } from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offers;
  onActiveCardChange: (activeOffer: ActiveOffer) => void;
}

function CardsList({ offers, onActiveCardChange }: CardsListProps): JSX.Element {
  const city = useAppSelector((state) => state.city);

  return (
    <> {
      offers
        .filter((offer) => offer.city.name === city)
        .map((offer) => {
          const keyValue = `${offer.id}-${offer.title}`;
          return <Card offer={offer} key={keyValue} onActiveCardChange={onActiveCardChange} />;
        })
    }
    </>
  );
}

export default CardsList;
