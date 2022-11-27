import { Folder } from "appTypes";
import { useAppSelector } from "./app";
import { useTranslate } from "./useTranslate";

type UseFolders = (filter?: 'defaultFolders' | 'userFolders') => Folder[];

export const useFolders: UseFolders = (filter) => {
  const { __ } = useTranslate();
  
  const reviews = useAppSelector(state => state.reviews.reviews);
  const defaultFolders: Folder[] = [
    __("folder.watched"),
    __("folder.watchLater"),
    __("folder.watching"),
    __("folder.dropped"),
    __("folder.delayed")
  ];

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