import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "hooks/app";
import { removeSearchTag } from "store/slices/searchSlice";

type Props = {tag: string};

const TagDeletableSearch: React.FC<Props> = ({tag}) => {
  const dispatch = useAppDispatch();

  return (
    <Box
      display='flex'
      onClick={() => dispatch(removeSearchTag(tag))}
      border='2px solid rgb(46, 125, 50)'
      borderRadius={1}
      px={1}
      sx={{
        cursor: 'pointer',
        transition: 'background 0.1s ease-in-out',
        alignItems: 'center',
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
      <CancelIcon htmlColor='rgb(46, 125, 50)' sx={{ml: 1}} />
    </Box>
  )
}

export { TagDeletableSearch };