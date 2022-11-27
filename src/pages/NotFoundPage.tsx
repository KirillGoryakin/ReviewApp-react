import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography
        fontSize='8rem'
        fontWeight={700}
        color='text.secondary'
      >
        404
      </Typography>
      <Typography
        fontSize='4rem'
        fontWeight={700}
        color='text.secondary'
      >
        Page not found
      </Typography>
      <Link to='/' replace>
        <Button
          variant='outlined'
          sx={{
            mt: 6,
            fontSize: '1.5rem'
          }}
        >
          Home Page
        </Button>
      </Link>
    </div>
  )
}

export { NotFoundPage };