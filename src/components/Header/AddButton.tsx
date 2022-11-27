import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import { useTranslate } from 'hooks/useTranslate';
import { useNavigate } from "react-router";

const AddButton = () => {
  const { __ } = useTranslate();
  const navigate = useNavigate();
  
  return (
    <Button
      onClick={() => navigate('new')}
      variant="outlined"
      size="large"
      startIcon={<AddIcon fontSize="large" />}
      sx={{
        color: '#fff',
        borderColor: '#fff',
        borderRadius: 8,
        ml: 'auto',
        mr: 4,
        ":hover": {
          borderColor: '#fff',
          backgroundColor: 'rgb(177 177 177 / 30%)'
        }
      }}
    >
      {__("header.addNew")}
    </Button>
  )
}

export { AddButton };