import { Box } from '@mui/material';

type Props = {
  src: string;
  onSelect: (src: string) => void;
};

const Image: React.FC<Props> = ({ src, onSelect }) => {
  return (
    <Box
      width={210}
      minWidth={210}
      height={240}
      border='2px solid #ebebeb'
      borderRadius='5px'
      textAlign='center'
      sx={{
        cursor: 'pointer',
        ":hover": {
          borderColor: '#1976d2'
        }
      }}
    >
      <img
        src={src}
        onClick={() => onSelect(src)}
        style={{ width: 'inherit', height: 'inherit', objectFit: 'cover' }}
      />
    </Box>
  )
}

export { Image };