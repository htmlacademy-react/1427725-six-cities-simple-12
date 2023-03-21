// const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const convertRatingToWitdh = (rating: number) => ({ width: `${Math.round(rating) * 20}%` });

export { convertRatingToWitdh };
