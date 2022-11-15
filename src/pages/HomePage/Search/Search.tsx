import { Box } from "@mui/system";
import { FolderSearch } from "./FolderSearch";
import { Sorting } from "./Sorting";
import { TagSearch } from "./TagSearch";
import { TextSearch } from "./TextSearch";

const Search = () => {
  return (
    <Box sx={{mb: 4}}>

      <TextSearch />

      <Box
        display='flex'
        sx={{
          direction: 'row',
          flexWrap: 'wrap',
          gap: 1,
          mb: 2
        }}
        >
        <FolderSearch />
        <TagSearch />
      </Box>

      <Sorting />

    </Box>
  )
}

export { Search };