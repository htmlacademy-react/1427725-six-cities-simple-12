import { useRef, useEffect } from 'react';
import { Offers, City, ActiveOffer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  offers: Offers;
  selectedOffer: ActiveOffer;
  city: City;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [15, 35]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [15, 35]
});

function Map(props: MapProps): JSX.Element {
  const { offers, selectedOffer, city } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom, { animate: false, duration: 1.0 });
    }
  }, [map, offers, selectedOffer, city.location.latitude, city.location.longitude, city.location.zoom]);

  return (
    <div style={{ height: '100%' }} ref={mapRef}></div>
  );
}

export default Map;
