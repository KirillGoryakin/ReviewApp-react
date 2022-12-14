import {
  Box,
  TextField,
  InputAdornment,
  IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Folder } from "appTypes";
import { useTranslate } from "hooks/useTranslate";

type Props = {
  setFolder: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
};

const AddNewFolderButton = () => {
  return (
    <InputAdornment position="end">
      <IconButton type='submit'>
        <AddIcon />
      </IconButton>
    </InputAdornment>
  );
}

const AddNewFolderField: React.FC<Props> = ({ setFolder, onClose }) => {
  const { __ } = useTranslate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & { folder: { value: Folder } };
    setFolder(target.folder.value.trim());
    
    onClose();
  }

  return (
    <Box pb={1} pl={1}>
      <form onSubmit={handleSubmit}>
        <TextField
          onKeyDown={(e) => e.stopPropagation()}
          name='folder'
          size='small'
          label={__("folderSelector.addNewFolderField.label")}
          InputProps={{
            endAdornment: <AddNewFolderButton />,
            sx: { pr: 1 }
          }}
        />
      </form>
    </Box>
  )
}

export { AddNewFolderField };