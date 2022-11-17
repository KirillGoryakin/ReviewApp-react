import { useAppDispatch, useAppSelector } from "./app";

export const useFilter = () => {
  const reviews = useAppSelector(state => state.reviews.reviews);
  const search = useAppSelector(state => state.search);

  const filtered = reviews.filter(({ title, body, folder, tags }) => {
    let matches = true;
    
    if (matches && search.search) {
      matches = title.concat(body).toLowerCase()
        .includes(search.search.toLowerCase());
    }
    if (matches && search.folder !== 'All') {
      matches = folder === search.folder;
    }
    if (matches && search.tags.length) {
      matches = search.tags.every(searchTag => tags.includes(searchTag));
    }

    return matches;
  });

  return filtered;
};