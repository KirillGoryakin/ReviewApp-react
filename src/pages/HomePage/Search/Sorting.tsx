import {useState} from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Sorting = () => {
  const [value, setValue] = useState('');

  const selectLabel = 'Sort by';

  return (
    <FormControl>
      <InputLabel id="sort-by-select-label">{selectLabel}</InputLabel>
      <Select
        label={selectLabel}
        labelId="sort-by-select-label"
        sx={{ minWidth: 100 }}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <MenuItem value='newest'>Newest</MenuItem>
        <MenuItem value='oldest'>Oldest</MenuItem>
        <MenuItem value='a-to-z'>A to Z</MenuItem>
        <MenuItem value='z-to-a'>Z to A</MenuItem>
        <MenuItem value='highest-score'>Highest score</MenuItem>
        <MenuItem value='lowest-score'>Lowest score</MenuItem>
      </Select>
    </FormControl>
  )
}

export { Sorting };