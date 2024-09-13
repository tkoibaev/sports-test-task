export type TPicture = {
  url: string;
};

export type TAuthor = {
  nick: string;
  id: string;
  picture: TPicture;
};

export type TParentComment = {
  text: string;
  id: string;
  author: TAuthor;
};

export type TRating = {
  plus: number;
  minus: number;
};

export type TPublished = {
  bunin: string;
};

export type TComment = {
  id: string;
  text: string;
  published: TPublished;
  rating: TRating;
  parentComment: TParentComment | null;
  author: TAuthor;
};
