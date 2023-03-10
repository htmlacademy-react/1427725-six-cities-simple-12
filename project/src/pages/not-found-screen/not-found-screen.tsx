import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <h1 className="login__title">404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </main>
    </>
  );
}

export default NotFoundScreen;
