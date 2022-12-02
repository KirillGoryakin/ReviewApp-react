import { Folder, Review, Tag } from "appTypes";
import { useSearchParams } from "react-router-dom";

interface FilterParams {
  s: string;
  folder: Folder;
  tags: Tag[];
};

type UseFilter = () => {
  filter: (reviews: Review[]) => Review[];
  filterParams: FilterParams;
  setFilterParams:
    (callback: (params: FilterParams) => FilterParams) => void;
};

export const useFilter: UseFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParams: FilterParams = {
    s: searchParams.get('s') || '',
    folder: searchParams.get('folder') || 'All',
    tags: searchParams.get('tags')?.split(',') || []
  };

  const filter = (reviews: Review[]) => {
    const filtered = reviews.filter(({ title, body, folder, tags }) => {
      let matches = true;

      if (matches && filterParams.s) {
        matches = title.concat(body).toLowerCase()
          .includes(filterParams.s.toLowerCase());
      }
      if (matches && filterParams.folder !== 'All') {
        matches = folder === filterParams.folder;
      }
      if (matches && filterParams.tags.length) {
        matches = filterParams.tags.every(filterTag => tags.includes(filterTag));
      }

      return matches;
    });

    return filtered;
  }

  const setFilterParams =
    (callback: (params: FilterParams) => FilterParams) => {
      const newParams = callback(filterParams);
      
      if (!newParams.s){
        searchParams.delete('s');
      } else {
        searchParams.set('s', newParams.s);
      }
      
      if (newParams.folder === 'All') {
        searchParams.delete('folder');
      } else {
        searchParams.set('folder', newParams.folder);
      }
      
      if (newParams.tags.length === 0){
        searchParams.delete('tags');
      } else {
        searchParams.set('tags', newParams.tags.join(','));
      }

      setSearchParams(searchParams);
  }
  
  return { filter, filterParams, setFilterParams};
};