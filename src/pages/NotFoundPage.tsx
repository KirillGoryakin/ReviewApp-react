import { Button, Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { __ } = useTranslate();

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography
        fontSize='8rem'
        fontWeight={700}
        color='text.secondary'
      >
        {__("notFoundPage.404")}
      </Typography>
      <Typography
        fontSize='4rem'
        fontWeight={700}
        color='text.secondary'
      >
        {__("notFoundPage.text")}
      </Typography>
      <Link to='/' replace>
        <Button
          variant='outlined'
          sx={{
            mt: 6,
            fontSize: '1.5rem'
          }}
        >
          {__("notFoundPage.buttonHome")}
        </Button>
      </Link>
    </div>
  )
}

export { NotFoundPage };