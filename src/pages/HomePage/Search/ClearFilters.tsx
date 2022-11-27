import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const ClearFilters = () => {
  const [searchParams, setTeachParams] = useSearchParams();
  
  const handleClick = () => {
    searchParams.delete('s');
    searchParams.delete('folder');
    searchParams.delete('tags');
    searchParams.delete('sort');

    setTeachParams(searchParams);
  }

  return (
    <Button
      endIcon={<FilterAltOffIcon />}
      onClick={handleClick}
    >
      Clear Filters
    </Button>
  )
}

export { ClearFilters };