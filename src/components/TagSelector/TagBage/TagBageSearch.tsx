import { Box, Typography } from "@mui/material";
import { useFilter } from "hooks/useFilter";

type Props = {tag: string};

const TagBageSearch: React.FC<Props> = ({tag}) => {
  const { filterParams, setFilterParams } = useFilter();

  const handleClick = () => {
    setFilterParams(
      params => ({ ...params, tags: filterParams.tags.concat(tag)})
    );
  }

  return (
    <Box
      onClick={handleClick}
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

export { TagBageSearch };