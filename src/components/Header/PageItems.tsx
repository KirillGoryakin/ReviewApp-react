import { Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { Link } from "react-router-dom";

const PageItems = () => {
  const { __ } = useTranslate();
  
  return (
    <>
      <Link to='/'>
        <Typography variant="h6" p={2}>
          {__('header.home')}
        </Typography>
      </Link>
      <Link to='about'>
        <Typography variant="h6" p={2}>
          {__('header.about')}
        </Typography>
      </Link>
    </>
  )
}

export { PageItems };