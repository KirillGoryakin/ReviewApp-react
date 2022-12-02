import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Button } from '@mui/material';
import { useTranslate } from 'hooks/useTranslate';
import { useSearchParams } from 'react-router-dom';

const ClearFilters = () => {
  const { __ } = useTranslate();
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
      className="homePage-clearFilters"
      endIcon={<FilterAltOffIcon />}
      onClick={handleClick}
    >
      {__("homePage.clearFilters.button")}
    </Button>
  )
}

export { ClearFilters };