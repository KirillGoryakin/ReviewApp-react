import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Stack,
  Button,
  Box
} from "@mui/material";
import { ReviewContext } from '../ReviewFormLayout';
import { Image } from './Image';
import SearchedByTitleImage from 'assets/img/powered_by_google.png';

type Props = {
  title: string;
  open: boolean;
  onClose: () => void;
};

const SearchByTitle: React.FC<Props> = ({ title, open, onClose }) => {
  const [review, setReview] = useContext(ReviewContext);
  const [searchTitle, setSearchTitle] = useState('');
  const [startFrom, setStartFrom] = useState(1);
  const [images, setImages] = useState<{link: string}[]>([]);

  const fetchImages = (query: string) => {
    if (query.trim()) {
      const options = {
        method: 'get',
        url: 'https://customsearch.googleapis.com/customsearch/v1',
        params: {
          key: process.env.REACT_APP_API_KEY,
          cx: process.env.REACT_APP_SEARCH_ENGINE_ID,
          searchType: 'image',
          q: query.trim(),
          start: startFrom
        }
      };
      axios(options).then(response => {
        if(response.data.items?.length){
          const itemsToAdd: {link: string}[] = [];

          response.data.items.forEach((el: { link: string }) => {
            if(!images.includes(el)){
              itemsToAdd.push(el);
            }
          });
          setImages([...images, ...itemsToAdd]);
        }
      });
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchImages(searchTitle);
  }

  const onSelect = (src: string) => {
    setReview({ ...review, imageUrl: src })
    onClose();
  }

  const showMore = () => {
    if(startFrom < 100){
      setStartFrom(startFrom + 10);
    }
  }

  useEffect(() => {
    setSearchTitle(title);
  }, [title]);

  useEffect(() => {
    if (open) fetchImages(searchTitle);
  }, [open, startFrom]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='lg'
      fullWidth
    >
      <DialogTitle
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        Search image by title
        <img
          src={SearchedByTitleImage}
          style={{
            marginLeft: 'auto'
          }}
        />
      </DialogTitle>
      <DialogContent sx={{
        flex: '0 0 auto',
        overflow: 'hidden',
        pb: 0
      }}>
        <Stack
          component='form'
          direction='row'
          spacing={1}
          mb={2}
          onSubmit={handleSubmit}
        >
          <TextField
            name='title'
            size='small'
            sx={{ flexGrow: 8 }}
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Button
            variant="contained"
            size='medium'
            sx={{ flexGrow: 1 }}
            type='submit'
          >
            Search
          </Button>
        </Stack>
      </DialogContent>
      <DialogContent dividers>
        <Box
          display='flex'
          flexWrap='wrap'
          gap={1}
        >
          {images.map(({ link }) =>
            <Image
              key={link}
              src={link}
              onSelect={onSelect}
            />)
          }
        </Box>

        {(images.length > 0 && startFrom < 100) &&
          <Box
            display='flex'
            justifyContent='center'
            mt={4}
          >
            <Button
              variant='outlined'
              size='large'
              onClick={showMore}
            >
              Show More...
            </Button>
          </Box>
        }
      </DialogContent>
    </Dialog>
  )
}

export { SearchByTitle };