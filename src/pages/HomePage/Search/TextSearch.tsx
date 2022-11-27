import { Button, Stack, TextField } from "@mui/material";
import { useFilter } from "hooks/useFilter";
import { useState, useEffect } from "react";

const TextSearch = () => {
  const { filterParams, setFilterParams } = useFilter();
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFilterParams(params => ({ ...params, s: value }));
  }

  useEffect(() => {
    setValue(filterParams.s);
  }, []);
  
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
        onFocus={(e) => e.target.select()}
        sx={{ flexGrow: 16 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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