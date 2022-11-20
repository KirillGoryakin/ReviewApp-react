import { Stack, TextField, Box } from "@mui/material";
import { FolderSelector } from "components/FolderSelector";
import { TagSelector } from "components/TagSelector";
import { ImageSelector } from "./ImageSelector";
import { ScoreSelector } from "./ScoreSelector";

const NewPostPage = () => {
  return (
    <Stack direction='column' spacing={2}>
      <TextField
        label='Title'
        size='small'
      />

      <TextField
        label='Description'
        multiline
        minRows={3}
      />

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
            <FolderSelector variant="add" />
            <TagSelector variant="add" />
          </Box>
        </div>
      </Stack>
    </Stack>
  )
}

export { NewPostPage };