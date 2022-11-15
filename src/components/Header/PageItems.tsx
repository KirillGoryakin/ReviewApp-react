import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PageItems = () => {
  return (
    <>
      <Link to='/'>
        <Typography variant="h6" p={2}>
          Home
        </Typography>
      </Link>
      <Link to='about'>
        <Typography variant="h6" p={2}>
          About this Project
        </Typography>
      </Link>
    </>
  )
}

export { PageItems };