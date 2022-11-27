import { Button, Menu, MenuItem } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useEffect, useRef, useState } from "react";
import { useFolders } from "hooks/useFolders";
import { useFilter } from "hooks/useFilter";
import { useTranslate } from "hooks/useTranslate";

const FolderSelectorSearch = () => {
  const { __ } = useTranslate();
  
  const { filterParams, setFilterParams } = useFilter();
  const folders = useFolders();
  const [selectedFolder, setFolder] = useState('');

  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const ITEM_HEIGHT = 36;

  const handleSelect = (folder: string) => {
    setOpen(false);
    setFolder(folder);
    setFilterParams(params => ({ ...params, folder }));
  }

  useEffect(() => {
    if (filterParams.folder !== 'All')
      setFolder(filterParams.folder);
    else
      setFolder('');
  }, [filterParams]);

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
        {selectedFolder ? selectedFolder : __("folderSelector.label")}
      </Button>
      <Menu
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => setOpen(false)}
        sx={{maxHeight: ITEM_HEIGHT * 6.5}}
      >
        <MenuItem onClick={() => handleSelect('All')}>
          {__("folderSelector.all")}
        </MenuItem>

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

export { FolderSelectorSearch };