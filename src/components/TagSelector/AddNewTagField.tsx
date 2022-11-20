import {
  Box,
  TextField,
  InputAdornment,
  IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Tag } from "appTypes";
import { useAppDispatch } from "hooks/app";

const AddNewTagButton = () => {
  return (
    <InputAdornment position="end">
      <IconButton type='submit'>
        <AddIcon />
      </IconButton>
    </InputAdornment>
  );
}

const AddNewTagField = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // const target = event.target as typeof event.target & { tag: { value: Tag } };
  }

  return (
    <Box px={1} pb={1}>
      <form onSubmit={handleSubmit}>
        <TextField
          name='tag'
          size='small'
          label='A New Tag'
          InputProps={{
            endAdornment: <AddNewTagButton />,
            sx: { pr: 1 }
          }}
        />
      </form>
    </Box>
  )
}

export { AddNewTagField };