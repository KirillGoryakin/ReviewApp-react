import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import { Review } from "store/slices/reviewsSlice";
import { Tag } from "pages/HomePage/CardList/Tag";
import { MoreButton } from "./MoreButton";
import { Score } from "./Score";

type Props = Review;

const Card: React.FC<Props> = (props) => {
  const {
    id,
    title,
    body,
    imageUrl,
    date,
    tags,
    folder,
    score,
  } = props;

  return (
    <Box
      component='li'
      position='relative'
      border='2px solid #ebebeb'
      borderRadius='5px'
      boxShadow='3'
    >
      
      <MoreButton />

      <Accordion sx={{width: '100%', boxShadow: 'none'}}>
        <AccordionSummary sx={{position: 'relative'}}>

          <Score score={score} />

          <Box
            border='2px solid #ebebeb'
            borderRadius='5px'
            sx={{
              width: 150,
              height: 130,
              flexGrow: 0
            }}
          >
            <img
              style={{ width: 'inherit', height: 'inherit', objectFit: 'none' }}
              src={imageUrl}
            />
          </Box>
          <Box sx={{ flexGrow: 1, ml: 2 }}>

            <Typography
              variant="h5"
              fontWeight={500}
              mb={1}
            >
              {title}
            </Typography>

            <Stack
              direction='row'
              flexWrap='wrap'
              sx={{gap: 1, mb: 1}}
            >
              {tags.map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
            </Stack>

            <Typography
              variant="body1"
              component="p"
              fontSize='1.25rem'
              fontWeight={500}
              color='text.secondary'
            >
              {folder}
            </Typography>

            <Typography
              variant="body1"
              component="p"
              fontWeight={500}
              color='text.secondary'
            >
              {date}
            </Typography>

          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Typography variant="body1" pt={2}>
            {body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export { Card };