import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className='spinner'>
      <div className='spinner__container'>
        <h2 className='spinner__header'>Loading ...</h2>
        <div className='spinner__animation' />
      </div>
    </div>
  );
}

export default LoadingScreen;
