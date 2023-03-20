import Review from '../review/review';

function ReviewsList(): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <Review />
      </ul>
    </>
  );
}

export default ReviewsList;
