const convertRatingToWitdh = (rating: number) => ({ width: `${Math.round(rating) * 20}%` });

// module6-task1 PR fix

export { convertRatingToWitdh };
