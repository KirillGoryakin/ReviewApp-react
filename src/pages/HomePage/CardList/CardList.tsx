import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "hooks/app";
import { useFilter } from "hooks/useFilter";
import { useSort } from "hooks/useSort";
import { Card } from "./Card";

const CardList = () => {
  const reviews = useAppSelector(state => state.reviews.reviews);
  const { filter } = useFilter();
  const { sort } = useSort();

  const sorted = sort( filter(reviews) );

  return (
    <Stack
      component='ul'
      spacing={2}
    >
      {
        (sorted.length)
        ?
        sorted.map(review => (
          <Card
            key={review.id}
            {...review}
          />
        ))
        :
        <Typography
          fontSize='1.5rem'
          textAlign='center'
          color='grey.400'
          mt={8}
        >
          You have no any reviews yet.
        </Typography>
      }
    </Stack>
  )
}

export { CardList };