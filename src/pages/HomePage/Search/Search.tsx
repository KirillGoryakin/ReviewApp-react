import { Box } from "@mui/system";
import { FolderSelector } from "components/FolderSelector";
import { Sorting } from "./Sorting";
import { TagSelector } from "../../../components/TagSelector";
import { TextSearch } from "./TextSearch";
import { ClearFilters } from "./ClearFilters";

const Search = () => {
  return (
    <Box sx={{mb: 2}}>

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
        <FolderSelector variant="search" />
        <TagSelector variant="search" />
      </Box>

      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Sorting />
        <ClearFilters />
      </Box>

    </Box>
  )
}

export { Search };