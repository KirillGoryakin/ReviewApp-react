import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from 'hooks/app';
import { removeReview } from 'store/slices/reviewsSlice';
import { FolderChanger } from './FolderChanger';

const MoreButton = ({ id }: {id: number}) => {
  const dispatch = useAppDispatch();

  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  const folderRef = useRef(null);
  const [folderOpen, setFolderOpen] = useState(false);
  const onFolderClose = () => {
    setFolderOpen(false);
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(removeReview(id));
    setOpen(false);
  }

  return (
    <>
      <IconButton
        disableTouchRipple
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        sx={{
          position: 'absolute',
          top: 4,
          right: 4,
          zIndex: 1
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        className='menu-icon-spacing'
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => setOpen(false)}
      >
        <MenuItem disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem
          ref={folderRef}
          disableRipple
          onClick={() => setFolderOpen(true)}
        >
          <DriveFileMoveIcon />
          Move to folder
        </MenuItem>
        <MenuItem disableRipple>
          <StarsRoundedIcon />
          Change rating
        </MenuItem>
        <MenuItem
          disableRipple
          onClick={handleDelete}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>

      <FolderChanger
        id={id}
        anchorEl={folderRef.current}
        open={folderOpen}
        onClose={onFolderClose}
      />
    </>
  )
}

export { MoreButton };