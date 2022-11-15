import { Box, Typography } from "@mui/material";

type Props = {tag: string};

const Tag: React.FC<Props> = ({tag}) => {
  return (
    <Box
      border='2px solid rgb(46, 125, 50)'
      borderRadius={1}
      px={1}
    >
      <Typography
        variant="body1"
        fontWeight={600}
        color='rgb(46, 125, 50)'
      >
        {tag}
      </Typography>
    </Box>
  )
}

export { Tag };