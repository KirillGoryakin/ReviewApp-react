import AddIcon from '@mui/icons-material/Add';
import { Button, Popover, Box, Typography } from "@mui/material";
import { useRef, useState, useContext, useEffect } from "react";
import { TagBage } from './TagBage';
import { AddNewTagField } from './AddNewTagField';
import { useTags } from 'hooks/useTags';
import { Tag } from 'appTypes';
import { TagDeletable } from './TagDeletable';

type Props = {
  context: React.Context<any>
};

const TagAdd: React.FC<Props> = ({ context }) => {
  const [review, setReview] = useContext(context);
  const tags = useTags();
  const [includedTags, setIncludedTags] = useState<Tag[]>([]);

  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const addTag = (tag: Tag): void => {
    if( !includedTags.includes(tag) ){
      setIncludedTags(includedTags.concat(tag));
    }
  };

  useEffect(() => {
    setReview({...review, tags: includedTags});
  }, [includedTags]);

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
            (includedTags.length < tags.length)
              ? tags.map(tag =>
                (!includedTags.includes(tag))
                &&
                <TagBage
                  key={tag}
                  variant='add'
                  onClick={addTag}
                  tag={tag}
                />
              )
              : <Typography component="p" variant='body1' fontWeight={500} sx={{ p: 1 }}>
                No tags :{"("}
              </Typography>
          }
        </Box>
        <AddNewTagField addTag={addTag} />
      </Popover>

      {includedTags.map(tag =>
        <TagDeletable
          key={tag}
          variant='add'
          tag={tag}
          onClick={(tag) => setIncludedTags(includedTags.filter(el => el !== tag))}
        />
      )}
    </>
  )
}

export { TagAdd };