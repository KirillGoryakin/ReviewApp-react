import AddIcon from '@mui/icons-material/Add';
import { Button, Popover, Box, Typography } from "@mui/material";
import { useAppSelector } from "hooks/app";
import { useRef, useState } from "react";
import { TagDeletable } from './TagDeletable';
import { Tag } from './Tag';

const TagSearch = () => {
  const tags = useAppSelector(state => state.reviews.tags);
  const searchTags = useAppSelector(state => state.search.tags);

  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);
  
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpen(true)}
        variant="outlined"
        size="large"
        startIcon={<AddIcon fontSize="large" />}
        sx={{
          fontSize: '1rem',
          textTransform: 'unset',
          borderRadius: 8,
          borderWidth: 2,
          borderStyle: 'dashed',
          px: 2,
          py: 0,
          ":hover": {
            borderWidth: 2,
            borderStyle: 'dashed',
            backgroundColor: 'rgb(177 177 177 / 30%)'
          }
        }}
      >
        tag
      </Button>
      <Popover
        open={open}
        anchorEl={buttonRef.current}
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        onClose={() => setOpen(false)}
      >
        <Box
          display='flex'
          maxWidth={500}
          p={1}
          sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 1
          }}
        >
          {
            (searchTags.length < tags.length)
            ? tags.map(tag =>
                ( !searchTags.includes(tag) )
                &&
                <Tag
                  key={tag}
                  tag={tag}
                />
              )
            : <Typography component="p" variant='body1' fontWeight={500} sx={{p: 1}}>
                No tags :{"("}
              </Typography>
          }
        </Box>
      </Popover>

      {searchTags.map(tag => 
        <TagDeletable
          key={tag}
          tag={tag}
        />
      )}
    </>
  )
}

export { TagSearch };