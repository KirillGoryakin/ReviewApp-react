import { Button, Menu, MenuItem } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useRef, useState } from "react";
import { useAppSelector } from "hooks/app";
import { useDispatch } from "react-redux";
import { setSearchFolder } from "store/slices/searchSlice";

const FolderSearch = () => {
  const dispatch = useDispatch();
  const folders = useAppSelector(state => state.reviews.folders);
  const [open, setOpen] = useState(false);
  const [selectedFolder, setFolder] = useState('');

  const buttonRef = useRef(null);
  const ITEM_HEIGHT = 36;

  const handleSelect = (folder: string) => {
    setOpen(false);
    setFolder(folder);

    dispatch(setSearchFolder(folder));
  }

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpen(true)}
        variant="outlined"
        size="large"
        endIcon={<FolderOutlinedIcon fontSize="large" />}
        sx={{
          fontSize: '1rem',
          textTransform: 'unset',
          borderRadius: 8,
          borderWidth: 2,
          px: 2,
          py: 0,
          ":hover": {
            borderWidth: 2,
            backgroundColor: 'rgb(177 177 177 / 30%)'
          }
        }}
      >
        {selectedFolder ? selectedFolder : 'Select folder'}
      </Button>
      <Menu
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => setOpen(false)}
        sx={{maxHeight: ITEM_HEIGHT * 6.5}}
      >
        {folders.map(folder =>
          <MenuItem
            key={folder}
            onClick={() => handleSelect(folder)}
          >
            {folder}
          </MenuItem>
        )}
      </Menu>
    </>
  )
}

export { FolderSearch };