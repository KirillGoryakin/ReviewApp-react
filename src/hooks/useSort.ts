import { Review, Sort } from "appTypes";
import { useSearchParams } from "react-router-dom";

type UseSort = () => {
  sort: (reviews: Review[]) => Review[];
  sortMode: Sort;
  setSortMode: (sortMode: Sort) => void; 
};

export const useSort: UseSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortMode = searchParams.get('sort') as Sort || undefined;

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

  const setSortMode = (sortMode: Sort) => {
    if(!sortMode){
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', sortMode);
    }
    
    setSearchParams(searchParams);
  }

  return { sort, sortMode, setSortMode };
}