import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "hooks/app";
import { useFilter } from "hooks/useFilter";
import { useSort } from "hooks/useSort";
import { useTranslate } from "hooks/useTranslate";
import { Card } from "./Card";

const CardList = () => {
  const { __ } = useTranslate();
  
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
          {__("homePage.cardList.empty")}
        </Typography>
      }
    </Stack>
  )
}

export { CardList };