import { Button, Menu, MenuItem } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import {
  useRef,
  useState,
  useContext,
  useEffect
} from "react";
import { AddNewFolderField } from "./AddNewFolderField";
import { useFolders } from "hooks/useFolders";
import { useTranslate } from "hooks/useTranslate";

type Props = {
  context: React.Context<any>
};

const FolderSelectorAdd: React.FC<Props> = ({ context }) => {
  const { __ } = useTranslate();
  
  const [review, setReview] = useContext(context);
  
  const folders = useFolders();
  const [open, setOpen] = useState(false);
  const [selectedFolder, setFolder] = useState('');

  const buttonRef = useRef(null);
  const ITEM_HEIGHT = 36;

  const handleSelect = (folder: string) => {
    setOpen(false);
    setFolder(folder);
  }

  useEffect(() => {
    setFolder(review.folder);
  }, []);

  useEffect(() => {
    setReview({...review, folder: selectedFolder});
  }, [selectedFolder]);

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
        <AddNewFolderField
          setFolder={setFolder}
          onClose={() => setOpen(false)}
        />
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

export { FolderSelectorAdd };