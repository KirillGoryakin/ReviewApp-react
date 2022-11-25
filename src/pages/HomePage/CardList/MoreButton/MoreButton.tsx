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
import { useNavigate } from 'react-router';
import { ConfirmDelete } from './ConfirmDelete';

const MoreButton = ({ id }: {id: number}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  
  const folderRef = useRef(null);
  const [folderOpen, setFolderOpen] = useState(false);
  const onFolderClose = () => {
    setFolderOpen(false);
    setOpen(false);
  };
  
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const onConfirmDeleteClose = () => {
    setConfirmDeleteOpen(false);
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(removeReview(id));
    onConfirmDeleteClose();
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
        <MenuItem
          disableRipple
          onClick={() => navigate(`/edit/${id}`)}
        >
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
        <MenuItem
          disableRipple
          onClick={() => setConfirmDeleteOpen(true)}
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
      <ConfirmDelete
        open={confirmDeleteOpen}
        onClose={onConfirmDeleteClose}
        confirm={handleDelete}
      />
    </>
  )
}

export { MoreButton };