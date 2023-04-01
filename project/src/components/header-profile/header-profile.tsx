import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';


function HeaderProfile(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userName: string | undefined = 'Oliver.conner@gmail.com';

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        {
          authorizationStatus === AuthorizationStatus.Auth ? (
            <div className="header__nav-profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{userName}</span>
            </div>
          ) : (
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          )
        }
      </li>
      {
        authorizationStatus === AuthorizationStatus.Auth ? (
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/">
              <span className="header__signout">Sign out</span>
            </Link>
          </li>) : null
      }
    </ul>
  );
}

export default HeaderProfile;
