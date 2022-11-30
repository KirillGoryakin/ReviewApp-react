import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslate } from "hooks/useTranslate";
import { Link } from "react-router-dom";

type Props = {
  display: object;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const PageItems: React.FC<Props> = ({ display, onClick }) => {
  const { __ } = useTranslate();
  
  return (
    <Box sx={{ display }}>
      <Link to='/' onClick={onClick}>
        <Typography variant="h6" p={2}>
          {__('header.home')}
        </Typography>
      </Link>
      <Link to='about' onClick={onClick}>
        <Typography variant="h6" p={2}>
          {__('header.about')}
        </Typography>
      </Link>
    </Box>
  )
}

export { PageItems };