import { Stack, Typography } from "@mui/material";
import { useFilter } from "hooks/useFilter";
import { useSort } from "hooks/useSort";
import { Card } from "./Card";

const CardList = () => {
  const sort = useSort();
  const reviews = sort( useFilter() );

  return (
    <Stack
      component='ul'
      spacing={2}
    >
      {
        (reviews.length)
        ?
        reviews.map(review => (
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