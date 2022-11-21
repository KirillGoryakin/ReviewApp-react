import {
  Box,
  TextField,
  InputAdornment,
  IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Tag } from "appTypes";

type Props = {
  addTag: (tag: Tag) => void;
};

const AddNewTagButton = () => {
  return (
    <InputAdornment position="end">
      <IconButton type='submit'>
        <AddIcon />
      </IconButton>
    </InputAdornment>
  );
}

const AddNewTagField: React.FC<Props> = ({ addTag }) => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as typeof event.target & { tag: { value: Tag } };
    const input = form.tag;
    if( input.value.trim().length ) {
      addTag(input.value.trim());
      input.value = "";
    }
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