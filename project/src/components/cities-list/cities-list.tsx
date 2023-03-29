import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/action';
import { Link } from 'react-router-dom';
import { CityName } from '../../const';

function CitiesList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.cityName);
  const dispatch = useAppDispatch();
  const cityNames = Object.values(CityName);

  return (
    <>
      {
        cityNames.map((cityName) => (
          <li className="locations__item" key={cityName}>
            <Link
              className={`locations__item-link tabs__item ${cityName === activeCity ? 'tabs__item--active' : ''} `}
              to="/"
              onClick={() => { dispatch(setCity(cityName)); }}
            >
              <span>{cityName}</span>
            </Link>
          </li>
        ))
      }
    </>
  );

}

export default CitiesList;
