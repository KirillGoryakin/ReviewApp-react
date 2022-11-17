import { Button, Stack, TextField } from "@mui/material";
import { useAppDispatch } from "hooks/app";
import { useEffect, useState } from "react";
import { setSearchText } from "store/slices/searchSlice";

const TextSearch = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(setSearchText(value));
  }, [value]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {text: {value: string}};
    setValue(target.text.value);
  }

  return (
    <Stack 
      component='form'
      direction='row'
      spacing={1}
      mb={2}
      onSubmit={handleSubmit}
    >
      <TextField
        name='text'
        label='Search...'
        size='small'
        sx={{ flexGrow: 16 }}
      />
      <Button
        variant="contained"
        sx={{ flexGrow: 1 }}
        type='submit'
      >
        Search
      </Button>
    </Stack>
  )
}

export { TextSearch };