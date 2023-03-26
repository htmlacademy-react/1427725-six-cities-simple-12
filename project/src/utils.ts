const convertRatingToWitdh = (rating: number) => ({ width: `${Math.round(rating) * 20}%` });

export { convertRatingToWitdh };
