import AddIcon from '@mui/icons-material/Add';
import { Button, Fab } from "@mui/material";
import { useTranslate } from 'hooks/useTranslate';
import { useLocation, useNavigate } from "react-router";

const AddButton = () => {
  const { __ } = useTranslate();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Button
        onClick={() => navigate('new')}
        variant="outlined"
        size="large"
        startIcon={<AddIcon fontSize="large" />}
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
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
      <Fab
        onClick={() => navigate('new')}
        color="primary"
        sx={{
          display: {
            xs: (pathname === '/') ? 'inline-flex' : 'none',
            md: 'none'
          },
          position: 'fixed',
          bottom: '1rem',
          right: '1rem'
        }}
      >
        <AddIcon />
      </Fab>
    </>
  )
}

export { AddButton };