import { useState } from 'react';
import cn from 'classnames';
import { initialSortType, SortType } from '../../const';

type SortTypeItem = typeof initialSortType;

type SortingProps = {
  sortType: SortTypeItem;
  onChangeSortClick: (sortType: SortTypeItem) => void;
}

function Sorting({ sortType, onChangeSortClick }: SortingProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => { setIsOpened(!isOpened); }}>
        {sortType.text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', { 'places__options--opened': isOpened })}>
        {Object.values(SortType).map((sortTypeValue) => (
          <li
            tabIndex={0}
            key={sortTypeValue.id}
            className={cn('places__option', { 'places__option--active': sortType === sortTypeValue })}
            onClick={() => {
              onChangeSortClick(sortTypeValue);
              setIsOpened(false);
            }}
          >{sortTypeValue.text}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
