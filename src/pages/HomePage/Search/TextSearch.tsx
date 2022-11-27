import { Button, Stack, TextField } from "@mui/material";
import { useFilter } from "hooks/useFilter";
import { useTranslate } from "hooks/useTranslate";
import { useState, useEffect } from "react";

const TextSearch = () => {
  const { __ } = useTranslate();
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
        label={__("homePage.textSearch.input")}
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
        {__("homePage.textSearch.button")}
      </Button>
    </Stack>
  )
}

export { TextSearch };