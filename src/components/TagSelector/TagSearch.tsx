import AddIcon from '@mui/icons-material/Add';
import { Button, Popover, Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { TagBage } from './TagBage';
import { useTags } from 'hooks/useTags';
import { TagDeletable } from './TagDeletable';
import { useFilter } from 'hooks/useFilter';
import { useTranslate } from 'hooks/useTranslate';

const TagSearch = () => {
  const { __ } = useTranslate();
  
  const tags = useTags();
  const { filterParams } = useFilter();
  const searchTags = filterParams.tags;

  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);

  return (
    <>
      <Button
        className="tagSelector-search"
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
        {__("tagSelector.label")}
      </Button>
      <Popover
        open={open}
        anchorEl={buttonRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
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
            (!tags.every(value => searchTags.includes(value)))
              ? tags.map(tag =>
                (!searchTags.includes(tag))
                &&
                <TagBage
                  key={tag}
                  variant='search'
                  tag={tag}
                />
              )
              : <Typography component="p" variant='body1' fontWeight={500} sx={{ p: 1 }}>
                {__("tagSelector.empty")}
              </Typography>
          }
        </Box>
      </Popover>

      {searchTags.map(tag =>
        <TagDeletable
          key={tag}
          variant='search'
          tag={tag}
        />
      )}
    </>
  )
}

export { TagSearch };