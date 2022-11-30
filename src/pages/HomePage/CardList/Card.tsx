import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import { Review } from "appTypes";
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
      
      <MoreButton id={id} />

      <Accordion
        sx={{
          width: '100%',
          boxShadow: 'none',
          pt: { xs: 4, sm: 0 }
        }}
      >
        <AccordionSummary
          
          sx={{
            position: 'relative',
            "& > .MuiAccordionSummary-content": {
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'start' },
            },
          }}
        >

          <Score score={score} />

          <Box
            border='2px solid #ebebeb'
            borderRadius='5px'
            width={{ xs: 275, sm: 150 }}
            height={{ xs: 312, sm: 170 }}
            flexGrow={0}
          >
            <img
              style={{ width: 'inherit', height: 'inherit', objectFit: 'cover' }}
              src={imageUrl}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              ml: 2,
              minWidth: { xs: 275, sm: 'unset' }
            }}
          >

            <Typography
              variant="h5"
              fontWeight={500}
              mb={1}
              mt={{xs: 1, sm: 0}}
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
              sx={{
                maxWidth: { xs: 190, sm: 'unset' }
              }}
            >
              {folder}
            </Typography>

            <Typography
              variant="body1"
              component="p"
              fontWeight={500}
              color='text.secondary'
            >
              {new Date(date).toLocaleDateString()}
            </Typography>

          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Typography variant="body1" pt={2} whiteSpace='pre-wrap'>
            {body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export { Card };