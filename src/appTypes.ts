export type Tag = string;
export type Folder = string;
export type Score = number;

export interface Review {
  id: number,
  title: string,
  body: string,
  imageUrl: string,
  date: string,
  tags: Tag[],
  folder: Folder,
  score: Score,
};

export type Sort =
  'newest' | 'oldest'
  | 'a-to-z' | 'z-to-a'
  | 'highest-score' | 'lowest-score'
  | undefined;

export interface Language {
  name: string;
  code: string;
  [key: string]: string;
};