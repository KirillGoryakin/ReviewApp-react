import { createContext } from "react";
import { Stack, TextField, Box, Button } from "@mui/material";
import { FolderSelector } from "components/FolderSelector";
import { TagSelector } from "components/TagSelector";
import { ImageSelector } from "./ImageSelector";
import { ScoreSelector } from "./ScoreSelector";
import { useTranslate } from "hooks/useTranslate";

export const ReviewContext = createContext<any>(null);

const ReviewFormLayout: React.FC<any> = ({
  review,
  setReview,
  handleClick,
  buttonText
}) => {
  const { __ } = useTranslate();

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
    >
      <TextField
        label={__("addReviewPage.title")}
        size='small'
        value={review.title}
        onChange={(e) => setReview({ ...review, title: e.target.value })}
      />

      <TextField
        label={__("addReviewPage.description")}
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

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          width: 'max-content',
          fontSize: '1.5rem',
          px: 8,
          mx: 'auto'
        }}
      >
        {buttonText}
      </Button>
    </Box>
  )
}

export { ReviewFormLayout };