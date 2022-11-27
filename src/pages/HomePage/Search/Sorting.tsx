import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Sort } from "appTypes";
import { useSort } from 'hooks/useSort';
import { useState, useEffect } from 'react';

const Sorting = () => {
  const { sortMode, setSortMode } = useSort();
  const [value, setValue] = useState(sortMode || '');

  const selectLabel = 'Sort by';

  useEffect(() => {
    setSortMode(value as Sort)
  }, [value]);

  useEffect(() => {
    setValue(sortMode || '');
  }, [sortMode]);

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