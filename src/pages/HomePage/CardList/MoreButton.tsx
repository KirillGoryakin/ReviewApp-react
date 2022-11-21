import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from 'hooks/app';
import { removeReview } from 'store/slices/reviewsSlice';

const MoreButton = ({ id }: {id: number}) => {
  const dispatch = useAppDispatch();
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

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
        className='cardEditMenu'
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
      >
        <MenuItem disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem disableRipple>
          <DriveFileMoveIcon />
          Move to folder
        </MenuItem>
        <MenuItem disableRipple>
          <StarsRoundedIcon />
          Change rating
        </MenuItem>
        <MenuItem
          disableRipple
          onClick={() => dispatch(removeReview(id))}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

export { MoreButton };