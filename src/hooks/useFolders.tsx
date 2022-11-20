import { Folder } from "appTypes";
import { useAppSelector } from "./app";

type UseFolders = (filter?: 'defaultFolders' | 'userFolders') => Folder[];

export const useFolders: UseFolders = (filter) => {
  const reviews = useAppSelector(state => state.reviews.reviews);
  const defaultFolders: Folder[] = ['All', 'Watched', 'Watch later', 'Watching', 'Dropped', 'Delayed'];

  if (filter === 'defaultFolders') return defaultFolders;

  const userFolders: Folder[] = [];
  reviews.forEach(({ folder }) => {
    if ( !defaultFolders.concat(userFolders).includes(folder) ){
      userFolders.push(folder);
    }
  });

  if (filter === 'userFolders') return userFolders;

  return defaultFolders.concat(userFolders);
}