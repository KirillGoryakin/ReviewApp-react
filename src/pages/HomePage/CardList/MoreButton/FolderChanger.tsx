import { Menu, MenuItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/app';
import { useFolders } from 'hooks/useFolders';
import { changeReviewFolder } from 'store/slices/reviewsSlice';

type Props = {
  id: number;
  open: boolean;
  anchorEl: Element | null;
  onClose: () => void;
};

const FolderChanger: React.FC<Props> = (props) => {
  const {
    id,
    open,
    anchorEl,
    onClose
  } = props;
  
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(state => state.reviews.reviews);
  const folders = useFolders();
  const currentFolder = reviews.find(review => review.id === id)?.folder;

  const ITEM_HEIGHT = 36;

  const handleSelect = (folder: string) => {
    dispatch(changeReviewFolder({id, folder}));
  }
  
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      onClose={onClose}
      onClick={onClose}
      sx={{ maxHeight: ITEM_HEIGHT * 6.5 }}
    >
      {folders
        .filter(folder => folder !== currentFolder)
        .map(folder =>
          <MenuItem
            key={folder}
            onClick={() => handleSelect(folder)}
          >
            {folder}
          </MenuItem>
      )}
    </Menu>
  )
}

export { FolderChanger };