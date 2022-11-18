import { Stack } from "@mui/material";
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
      {reviews.map(review => (
        <Card
          key={review.id}
          {...review}
        />
      ))}
    </Stack>
  )
}

export { CardList };