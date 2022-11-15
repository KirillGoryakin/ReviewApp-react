import { Button, Stack, TextField } from "@mui/material";

const TextSearch = () => {
  return (
    <Stack direction='row' spacing={1} mb={2}>
      <TextField
        label='Search...'
        size='small'
        sx={{ flexGrow: 16 }}
      />
      <Button
        variant="contained"
        sx={{ flexGrow: 1 }}
      >
        Search
      </Button>
    </Stack>
  )
}

export { TextSearch };