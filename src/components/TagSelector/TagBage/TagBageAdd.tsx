import { Box, Typography } from "@mui/material";
import { Tag } from "appTypes";

type Props = {
  tag: string;
  onClick: (tag: Tag) => void
};

const TagBageAdd: React.FC<Props> = ({ tag, onClick }) => {
  return (
    <Box
      data-tagBage={tag}
      onClick={() => onClick(tag)}
      border='2px solid rgb(46, 125, 50)'
      borderRadius={1}
      px={1}
      sx={{
        cursor: 'pointer',
        transition: 'background 0.1s ease-in-out',
        ":hover": {
          background: 'rgba(46, 125, 50, 0.1)'
        }
      }}
    >
      <Typography
        variant="body1"
        fontWeight={600}
        color='rgb(46, 125, 50)'
        sx={{userSelect: 'none'}}
      >
        {tag}
      </Typography>
    </Box>
  )
}

export { TagBageAdd };