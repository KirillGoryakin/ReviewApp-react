import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRef, useState, useContext } from "react";
import { SelectorMenu } from "./SelectorMenu";
import { ReviewContext } from "../NewPostPage";

const ImageSelector = () => {
  const [review] = useContext(ReviewContext);
  const buttonRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <Box
        ref={buttonRef}
        onClick={() => setMenuOpen(true)}
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
        {
          (!review.imageUrl)
          ? <>
              <AddIcon sx={{ color: 'grey.500', fontSize: '3rem', mb: 1 }} />
              <Typography
                color='grey.500'
                fontSize='2rem'
                fontWeight={500}
                lineHeight={1}
                sx={{ userSelect: 'none' }}
              >
                Add Image
              </Typography>
            </>
          : <img
              style={{ width: 'inherit', height: 'inherit', objectFit: 'cover' }}
              src={review.imageUrl}
            />
        }
      </Box>
      
      <SelectorMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        anchorEl={buttonRef.current}
      />
    </>
  )
}

export { ImageSelector };