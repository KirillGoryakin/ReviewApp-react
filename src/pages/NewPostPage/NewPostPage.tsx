import { createContext, useState } from "react";
import { Stack, TextField, Box } from "@mui/material";
import { FolderSelector } from "components/FolderSelector";
import { TagSelector } from "components/TagSelector";
import { ImageSelector } from "./ImageSelector";
import { ScoreSelector } from "./ScoreSelector";

export const ReviewContext = createContext<any>(null);

const NewPostPage = () => {
  const [review, setReview] = useState({
    title: '',
    body: '',
    imageUrl: '',
    date: new Date(Date.now()).toISOString(),
    tags: [],
    folder: '',
    score: 10
  });

  return (
    <Stack direction='column' spacing={2}>
      <TextField
        label='Title'
        size='small'
        value={review.title}
        onChange={(e) => setReview({...review, title: e.target.value})}
      />

      <TextField
        label='Description'
        multiline
        minRows={3}
        value={review.body}
        onChange={(e) => setReview({ ...review, body: e.target.value })}
      />

      <ReviewContext.Provider value={[review, setReview]}>
        <Stack direction='row' spacing={2}>
          <Box
            display='flex'
            flexDirection='column'
            gap={1}
          >
            <ImageSelector />
            <ScoreSelector />
          </Box>
          <div style={{ flexGrow: 1 }}>
            <Box
              display='flex'
              flexDirection='row'
              flexWrap='wrap'
              gap={1}
            >
              <FolderSelector variant="add" context={ReviewContext} />
              <TagSelector variant="add" context={ReviewContext} />
            </Box>
          </div>
        </Stack>
      </ReviewContext.Provider>
    </Stack>
  )
}

export { NewPostPage };