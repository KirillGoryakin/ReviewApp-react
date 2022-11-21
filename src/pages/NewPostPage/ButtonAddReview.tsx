import { Button } from "@mui/material";

type Props = { onClick: () => void };

const ButtonAddReview: React.FC<Props> = ({ onClick }) => 
  <Button
    onClick={onClick}
    variant="contained"
    sx={{
      width: 'max-content',
      fontSize: '1.5rem',
      px: 8,
      mx: 'auto'
    }}
  >
    Add Review
  </Button>

export { ButtonAddReview };