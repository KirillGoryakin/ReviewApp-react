import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';

const Logo = () => {
  return (
    <Link to='/' style={{ display: 'flex' }}>
      <PlaylistPlayRoundedIcon fontSize='large' />
      <Typography variant="h5" fontWeight='500' mr={4}>
        Reviews
      </Typography>
    </Link>
  )
}

export { Logo };