import { Tag } from "appTypes";
import { useAppSelector } from "./app";

export const useTags = (): Tag[] => {
  const reviews = useAppSelector(state => state.reviews.reviews);
  const reviewTags: Tag[] = [];

  reviews.forEach(({ tags }) => {
    reviewTags.push(...tags);
  });

  const uniqueTags: Tag[] = [...Array.from(new Set(reviewTags))];

  return uniqueTags;
}