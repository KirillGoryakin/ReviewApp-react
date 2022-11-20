import { Box, Menu, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRef } from "react";

const ImageSelector = () => {
  return (
    <Box
      display='flex'
      border='2px solid #ebebeb'
      borderRadius='5px'
      textAlign='center'
      width={210}
      minWidth={210}
      height={240}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        cursor: 'pointer',
        ":hover": {
          backgroundColor: 'rgb(177 177 177 / 30%)'
        }
      }}
    >
      <AddIcon sx={{ color: 'grey.500', fontSize: '3rem', mb: 1 }} />
      <Typography
        color='grey.500'
        fontSize='2rem'
        fontWeight={500}
        lineHeight={1}
      >
        Add Image
      </Typography>
    </Box>
  )
}

export { ImageSelector };