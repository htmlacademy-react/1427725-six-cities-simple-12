export type User = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type Review = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

export type NewReview = {
  comment: string;
  rating: number;
  hotelId: number;
}

export type Reviews = Review[];
