import { Box, Typography } from "@mui/material";

type Props = {score: number};

const Score: React.FC<Props> = ({ score }) => {
  const color = 
      (score >= 7) ? 'success.light'
    : (score <= 3) ? 'error.dark'
    : 'warning.light';

  return (
    <Box
      position='absolute'
      bottom='1rem'
      right='1rem'
      zIndex={1}
      bgcolor={color}
      borderRadius={2}
      px={1}
      py={0.5}
    >
      <Typography
        variant='h5'
        component='p'
        fontWeight={500}
        color='#fff'
      >
        {score}/10
      </Typography>
    </Box>
  )
}

export { Score };