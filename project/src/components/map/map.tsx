import { Offers } from '../../types/offer';

type MapProps = {
  offers: Offers;
}

function Map({ offers }: MapProps): JSX.Element {
  return (
    <section className="cities__map map"></section>
  );
}

export default Map;
