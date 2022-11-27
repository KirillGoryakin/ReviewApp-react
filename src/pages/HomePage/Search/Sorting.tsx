import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Sort } from "appTypes";
import { useSort } from 'hooks/useSort';
import { useTranslate } from "hooks/useTranslate";
import { useState, useEffect } from 'react';

const Sorting = () => {
  const { __ } = useTranslate();
  const { sortMode, setSortMode } = useSort();
  const [value, setValue] = useState(sortMode || '');

  const selectLabel = __("homePage.sort.label");

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
        sx={{ minWidth: selectLabel.length * 14 }}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <MenuItem value='newest'>{__("homePage.sort.newest")}</MenuItem>
        <MenuItem value='oldest'>{__("homePage.sort.oldest")}</MenuItem>
        <MenuItem value='a-to-z'>{__("homePage.sort.a-to-z")}</MenuItem>
        <MenuItem value='z-to-a'>{__("homePage.sort.z-to-a")}</MenuItem>
        <MenuItem value='highest-score'>{__("homePage.sort.highestScore")}</MenuItem>
        <MenuItem value='lowest-score'>{__("homePage.sort.lowestScore")}</MenuItem>
      </Select>
    </FormControl>
  )
}

export { Sorting };