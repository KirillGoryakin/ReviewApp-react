import { Review } from "appTypes";
import { useAppSelector } from "./app";

export const useSort = () => {
  const sortMode = useAppSelector(state => state.search.sort);

  const sort = (reviews: Review[]): Review[] => {
    const sorted = [...reviews];

    switch (sortMode) {

      case 'newest':
        sorted.sort((a, b) => {
          const aDate = new Date(a.date).getTime();
          const bDate = new Date(b.date).getTime();
          return bDate - aDate;
        });
        break;

      case 'oldest':
        sorted.sort((a, b) => {
          const aDate = new Date(a.date).getTime();
          const bDate = new Date(b.date).getTime();
          return aDate - bDate;
        });
        break;

      case 'a-to-z':
        sorted.sort((a, b) => {
          const aTitle = a.title;
          const bTitle = b.title;
          if (aTitle < bTitle) return -1;
          if (aTitle > bTitle) return 1;
          return 0;
        });
        break;

      case 'z-to-a':
        sorted.sort((a, b) => {
          const aTitle = a.title;
          const bTitle = b.title;
          if (aTitle < bTitle) return 1;
          if (aTitle > bTitle) return -1;
          return 0;
        });
        break;

      case 'highest-score':
        sorted.sort((a, b) => b.score - a.score);
        break;

      case 'lowest-score':
        sorted.sort((a, b) => a.score - b.score);
        break;

      default:
        sorted.sort((a, b) => {
          const aDate = new Date(a.date).getTime();
          const bDate = new Date(b.date).getTime();
          return bDate - aDate;
        });
        break;
        
    }

    return sorted;
  }

  return sort;
}