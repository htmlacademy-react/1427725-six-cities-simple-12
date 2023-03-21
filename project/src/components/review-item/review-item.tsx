import { Review } from '../../types/review';
import dayjs from 'dayjs';
import { convertRatingToWitdh } from '../../utils';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { user, rating, comment } = review;
  const date = new Date(review.date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={convertRatingToWitdh(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
